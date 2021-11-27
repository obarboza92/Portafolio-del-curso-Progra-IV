import React from 'react'
import './Formulario.css'
import { AppContext } from '../Context/'

function Formulario(){
    const [nuevaTarea, setNuevaTarea]
        = React.useState('')
    const {
        agregarNueva,
        setOpenModal
    } = React.useContext(AppContext)
    const cancelar = ()=>{
        setOpenModal(false)
    }
    const agregar = (evento)=>{
        evento.preventDefault()
        agregarNueva(nuevaTarea)
        cancelar()
    }
    const cambiando = (evento) =>{
        setNuevaTarea (evento.target.value)
    }

    return (
        <form onSubmit={agregar}>
            <label>Tarea</label>
            <textarea
                placeholder="Tarea"
                value={nuevaTarea}
                onChange={cambiando}
            ></textarea>
            <div className="Formulario-buttonContainer">
                <button
                    className="Formulario-button Formulario-button-cancel"
                    type="button"
                    onClick={cancelar}>Cancelar
                </button>
                <button
                    className="Formulario-button Formulario-button-add"
                    type="submit">Agregar
                </button>
            </div>
        </form>
    )
}

export { Formulario }