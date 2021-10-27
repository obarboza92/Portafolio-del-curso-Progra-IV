import './App.css';
import React from 'react'
import { UI } from './ui'

//hook
function useCookies(nombreCookie, contenidoCookie){
  const almacenamientoLocal = localStorage.getItem(nombreCookie)
  let elementoGuardado
  if(!almacenamientoLocal){
    //Serializacion
    const elementoSerializado = JSON.stringify(contenidoCookie)
    localStorage.setItem(nombreCookie, elementoSerializado)
    elementoGuardado = contenidoCookie
  }else{
    //Deserializacion
    elementoGuardado = JSON.parse(almacenamientoLocal)
  }
  const [elemento, setElemento] = React.useState(elementoGuardado)
  const guardar = (elementos) =>{
    if(elementos.length <= 0){
      localStorage.removeItem(nombreCookie)
    }else{
      const elementoSerializados = JSON.stringify(elementos)
      localStorage.setItem(nombreCookie, elementoSerializados)
    }
  }
  return [elemento, setElemento]
}

function App() {
  const tareasDefault = [
    {texto: "Tarea 1", completada: false},
    {texto: "Tarea 2", completada: false},
    {texto: "Tarea 3", completada: false}
  ]
  const miListaTareas = 'MI_LISTA_TAREAS'
  
  // uso de customer hooks
  const [tareas, guardar] = useCookies(miListaTareas, tareasDefault)

  //Hooks de React para interactuar con el DOM

  const [valorBuscado, buscarTarea] = React.useState('')

  const tareasCompletadas = tareas.filter(tarea => tarea.completada).length
  const totalTareas = tareasDefault.length

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



  const completar = (texto) =>{
    // eslint-disable-next-line
    const indice = tareas.findIndex(tarea => tarea.texto == texto)
    const nuevaLista = [...tareas]
    nuevaLista[indice].completada = !nuevaLista[indice].completada
    guardar(nuevaLista)
  }  
  

  const borrar = (texto) =>{
    // eslint-disable-next-line
    const indice = tareas.findIndex(tarea => tarea.texto == texto)
    const nuevaLista = [...tareas]
    nuevaLista.splice(indice, 1)
    guardar(nuevaLista)
  }


  const nombreAutorCookie = 'NOMBRE_AUTOR'
  const nombreAutorValor = 'JANE DOE'
  const[nombreDelAutor, guardarAutor] = useCookies(nombreAutorCookie, nombreAutorValor)

  return (
      <UI
      tareasCompletadas = {tareasCompletadas}
      totalTareas={totalTareas}
      valorBuscado={valorBuscado}
      buscarTarea={buscarTarea}
      tareasBuscadas={tareasBuscadas}
      completar={completar}
      borrar={borrar}
      nombreDelAutor = {nombreDelAutor}
      />
  )
}

export default App;
