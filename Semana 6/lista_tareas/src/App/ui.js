import React from 'react'
import { Encabezado} from '../Encabezado/'
import { BarraBusqueda } from '../BarraBusqueda/'
import { ListaTareas } from '../ListaTareas/'
import { Tarea } from '../Tarea/'
//import { BotonCrear } from '../BotonCrear/'

function UI({   
    tareasCompletadas,
    totalTareas,
    valorBuscado,
    buscarTarea,
    tareasBuscadas,
    completar,
    borrar,
    nombreDelAutor
}){
 
    return(
        <React.Fragment>
        <Encabezado
          completadas={tareasCompletadas}
          total={totalTareas}
        />
        <BarraBusqueda
          valorBusqueda={valorBuscado}
          funcionBuscar={buscarTarea}
        />
        <ListaTareas>
          {tareasBuscadas.map(tarea =>(
            <Tarea
              texto={tarea.texto}
              completada={tarea.completada}
              onComplete={()=>completar(tarea.texto)}
              onDelete={()=>borrar(tarea.texto)}
            />
          ))}
        </ListaTareas>
        <p>Autor: {nombreDelAutor}</p>
        
      </React.Fragment>
    )
}

export { UI }