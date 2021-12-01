import React from 'react'

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

  export { useCookies }
  