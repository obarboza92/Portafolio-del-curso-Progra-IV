import React from 'react';
import './Encabezado.css'
import { AppContext } from '../Context/'

function Encabezado(){
    const {tareasCompletadas, totalTareas} = React.useContext(AppContext)
    return(
        <h1 className="Encabezado">
            Tareas completadas {tareasCompletadas} de {totalTareas}
        </h1>
    )
}

export { Encabezado }
