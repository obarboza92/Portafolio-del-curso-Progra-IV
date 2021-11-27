import React from 'react'
import { useCookies } from './useCookies'
import { useGetBtc } from './useGetBtc'
import { useSearch } from './useSearch'

const AppContext = React.createContext()

const contenidoLista = [
    {texto: "Tarea 1", completada: false},
    {texto: "Tarea 2", completada: false},
    {texto: "Tarea 3", completada: false}
]
const nombreLista = 'MI_LISTA_TAREAS'


function AppProvider(props){
    const [tareas, guardar] = useCookies(nombreLista, contenidoLista)
    const [valorBuscado, tareasBuscadas, buscarTarea] = useSearch(tareas)
    
    const {btc, error} = useGetBtc()
    
    const tareasCompletadas = tareas.filter(tarea => tarea.completada).length
    const totalTareas = tareas.length
    
    const completar = (texto) =>{        
        const indice = tareas.findIndex(tarea => tarea.texto === texto)
        const nuevaLista = [...tareas]
        nuevaLista[indice].completada = !nuevaLista[indice].completada
        guardar(nuevaLista)
    }  
      
    const borrar = (texto) =>{
        const indice = tareas.findIndex(tarea => tarea.texto === texto)
        const nuevaLista = [...tareas]
        nuevaLista.splice(indice, 1)
        guardar(nuevaLista)
    }
        
    const nombreAutorCookie = 'NOMBRE_AUTOR'
    const nombreAutorValor = 'JANE DOE'
    const[nombreDelAutor] = useCookies(nombreAutorCookie, nombreAutorValor)

    const [openModal, setOpenModal] = React.useState(false);

    const agregarNueva = (text) =>{
    const nuevaLista = [...tareas]
    nuevaLista.push({
        texto: text,
        completada: false
    })
    guardar(nuevaLista)
}
    return (
        <AppContext.Provider value={{
            btc,
            error, 
            tareasCompletadas,
            totalTareas,
            valorBuscado,
            buscarTarea,
            tareasBuscadas,
            completar,
            borrar,
            nombreDelAutor,
            openModal,
            setOpenModal,
            agregarNueva,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }


