import React from "react";
import './ListaTareas.css'
function ListaTareas(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
} 
export { ListaTareas }