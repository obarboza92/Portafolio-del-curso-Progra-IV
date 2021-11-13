import './App.css';
import React from 'react'
import { UI } from './ui'

//hook
function useCookies(nombreCookie, contenidoCookie){
  const almacenamientoLocal = localStorage.getItem(nombreCookie)
  let elementoGuardado

  if(!almacenamientoLocal){
    //No hay una cookie guardada con el nombre dado
    const elementoSerializado = JSON.stringify(contenidoCookie) // Serialization
    localStorage.setItem(nombreCookie, elementoSerializado) // En esta linea se crea la cookie
    elementoGuardado = contenidoCookie
  }else{
    //Existe una cookie con el nombre dado que ya tiene tareas
    elementoGuardado = JSON.parse(almacenamientoLocal) //Deserialization
  }
  const [elemento, setElemento] = React.useState(elementoGuardado)
  const guardar = (elementos) =>{
    if(elementos.length <= 0){
      localStorage.removeItem(nombreCookie)
    }else{
      const elementoSerializados = JSON.stringify(elementos)
      localStorage.setItem(nombreCookie, elementoSerializados)
    }
    setElemento(elementos)
  }
  return [elemento, guardar]
}

function useSearch(tareas){
    //Hooks de React para interactuar con el DOM
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

   return [valorBuscado, tareasBuscadas, buscarTarea]
}

function useGetBtc(){
  const [data, obtenerData] = React.useState(null)

  const consultar = async() => {
    const peticion = await fetch('http://api.coindesk.com/v1/bpi/currentprice.json')
    const respuesta = await peticion.json()
    obtenerData(respuesta)
  }  

  React.useEffect(()=>{
    consultar()
  }, [])

  return data.bpi.USD.rate
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
  const [valorBuscado, tareasBuscadas, buscarTarea] = useSearch(tareas)
  const btc = useGetBtc()

  const tareasCompletadas = tareas.filter(tarea => tarea.completada).length
  const totalTareas = tareasDefault.length

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
      btc={btc}
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
