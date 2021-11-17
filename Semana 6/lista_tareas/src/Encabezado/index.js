import React from 'react';
import './Encabezado.css'
import { AppContext } from '../Context/'

function Encabezado(){
    const {taresCompletadas, totalTareas} = React.useContext(AppContext)
    return(
        <h1 className="Encabezado">
            Tareas completadas {taresCompletadas} de {totalTareas}
        </h1>
    )
}

export { Encabezado }
