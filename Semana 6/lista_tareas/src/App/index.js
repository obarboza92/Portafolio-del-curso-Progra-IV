import './App.css';
import React from 'react'
import { Encabezado} from '../Encabezado/'
import { BarraBusqueda } from '../BarraBusqueda/'
import { ListaTareas } from '../ListaTareas/'
import { Tarea } from '../Tarea/'


function App() {
  const tareasDefault = [
    {texto: "Tarea 1", completada: false},
    {texto: "Tarea 2", completada: false},
    {texto: "Tarea 3", completada: false}
  ]
  
  const tareasCompletadas = tareasDefault.filter(tarea => tarea.completada).length
  const totalTareas = tareasDefault.length


  const miListaTareas = 'MI_LISTA_TAREAS'
  const almacenamientoLocal = localStorage.getItem(miListaTareas)
  let tareasGuardadas
  if(!almacenamientoLocal){
    const tareasSerializadas = JSON.stringify(tareasDefault)
    localStorage.setItem(miListaTareas, tareasSerializadas)
    tareasGuardadas = tareasDefault
  }else{
    tareasGuardadas = JSON.parse(almacenamientoLocal)
  }


  //Hooks de React para interactuar con el DOM
  const[tareas, setTareas] = React.useState(tareasGuardadas)
  const [valorBuscado, buscarTarea] = React.useState('')

  //Comportamiento de busqueda
  let tareasBuscadas = []
  if(valorBuscado.length<=0){
    tareasBuscadas = tareas
  }else{
    tareasBuscadas = tareas.filter(
      tarea => {
        const textoTarea = tarea.texto.toLowerCase()
        const textoBuscado = valorBuscado.toLowerCase()
        return textoTarea.includes(textoBuscado)
      }
    )
  }

  const guardar = (tareas)=>{
    if(tareas.length <=0){
      localStorage.removeItem(miListaTareas)
    }else{
      const nuevasTareas = JSON.stringify(tareas)
      localStorage.setItem(miListaTareas, nuevasTareas)
    }
  }

  const completar = (texto) =>{
    // eslint-disable-next-line
    const indice = tareas.findIndex(tarea => tarea.texto == texto)
    const nuevaLista = [...tareas]
    nuevaLista[indice].completada = !nuevaLista[indice].completada
    guardar(nuevaLista)
    setTareas(nuevaLista)
  }  
  

  const borrar = (texto) =>{
    // eslint-disable-next-line
    const indice = tareas.findIndex(tarea => tarea.texto == texto)
    const nuevaLista = [...tareas]
    nuevaLista.splice(indice, 1)
    guardar(nuevaLista)
    setTareas(nuevaLista)
  }

  return (
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
    </React.Fragment>
  )
}

export default App;
