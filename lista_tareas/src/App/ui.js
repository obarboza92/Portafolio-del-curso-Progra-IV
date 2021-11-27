import React from 'react'
import { Encabezado} from '../Encabezado/'
import { BarraBusqueda } from '../BarraBusqueda/'
import { ListaTareas } from '../ListaTareas/'
import { Tarea } from '../Tarea/'
import { BotonCrear } from '../BotonCrear/'
import { AppContext } from '../Context'
import { Modal } from '../Modal/'
import { Formulario } from '../Formulario'

function UI(){
  const {btc,
    error,
    tareasBuscadas,
    completar,
    borrar,
    openModal,
    setOpenModal} = React.useContext(AppContext)

    return(
      <React.Fragment>
        <Encabezado/>
        <BarraBusqueda/>
        <ListaTareas>
          {<p>Valor de 1 Bitcoin: {btc}</p>}
          {<p>{error}</p>}
          {tareasBuscadas.map(tarea =>(
            <Tarea
              texto={tarea.texto}
              completada={tarea.completada}
              onComplete={()=>completar(tarea.texto)}
              onDelete={()=>borrar(tarea.texto)}
            />
          ))}
          {<p>Autor: </p>}
        </ListaTareas>
        {!!openModal && (
          <Modal>
              <Formulario></Formulario>
          </Modal>
        )}
        <BotonCrear
            setOpenModal={setOpenModal}
        />
      </React.Fragment>
    )

}

export { UI }