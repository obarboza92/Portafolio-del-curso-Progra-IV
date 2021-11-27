import React from 'react'

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

export { useSearch }