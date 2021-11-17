import React from 'react';
import './BarraBusqueda.css'
import { AppContext } from '../Context/'

function BarraBusqueda(){
  const {valorBuscado, buscarTarea} = React.useContext(AppContext)
  const buscar=(event)=>{
    buscarTarea(event.target.value)
  }
    return (
      <input 
        className="BarraBusqueda"
        placeholder="Tarea a buscar"
        onChange={buscar}
        value={valorBuscado}
      />
    )
}
export { BarraBusqueda }