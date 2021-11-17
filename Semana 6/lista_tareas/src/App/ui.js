import React from 'react'
import { Encabezado} from '../Encabezado/'
import { BarraBusqueda } from '../BarraBusqueda/'
import { ListaTareas } from '../ListaTareas/'
import { Tarea } from '../Tarea/'
import { BotonCrear } from '../BotonCrear/'
import { AppContext } from '../Context'

function UI(){
  return(
    <React.Fragment>
    <Encabezado/>
    <BarraBusqueda/>
    <AppContext.Consumer>
      {({btc,
      error,
      tareasBuscadas,
      completar,
      borrar}) =>(
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
        </ListaTareas>
      )}
    </AppContext.Consumer>
    <p>Autor: </p>   
    </React.Fragment>
 )
}

export { UI }