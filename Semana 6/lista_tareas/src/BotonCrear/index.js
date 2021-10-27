import React from "react";
import './BotonCrear.css'

function BotonCrear(props){
    const onClickButton = (mensaje) =>{
        console(mensaje)
    }
    return(
        <button
            className="BotonCrear"
            onClick={() => onClickButton(
            "Clickado!"
        )}
        >
            Agregar
        </button>
    )
}

export { BotonCrear }