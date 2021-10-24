import React from "react";
import './Tarea.css'
function Tarea(props){
    return(
        <li className='Tarea'>
            <span 
                className='Icon Icon-check'
                onClick={props.onComplete}
            >COMPLETAR</span>
            <p className={`Tarea-p ${props.completada && 'Tarea-p--completada'}`}>
                {props.texto}
            </p>
            <span 
                className='Icon Icon-delete'
                onClick={props.onDelete}
            >BORRAR</span>
        </li>
    )
} 
export { Tarea }