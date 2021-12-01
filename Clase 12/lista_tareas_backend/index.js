
const server = require("express")
const bodyParser = require('body-parser')
const app = server()
const port = 3001

const todoListApp = server()
todoListApp.use(bodyParser.json())


app.get('/', (req, res) =>{
    console.log('Hello world')
    res.send('Hello World')
})

app.listen(port, () => {console.log("Aplicacion corriendo en el puerto 3001")})



const contenidoLista = [
    {texto: "Tarea 1 XX", completada: false},
    {texto: "Tarea 2 XX", completada: false},
    {texto: "Tarea 3", completada: true},
    {texto: "Tarea 3", completada: false},
]



todoListApp.get("/start", (request, response) =>{
    response.send(contenidoLista)
})

//Get con busqueda de 1 valor
//Ejemplo http://localhost:3001/tarea/Tarea%201
todoListApp.get("/tarea/:valorBuscado", (request, response) =>{
    const {valorBuscado} = request.params;
    let tareasBuscadas = contenidoLista.filter(
        tarea => {
            const textoTarea = tarea.texto.toLowerCase()
            const textBuscado = valorBuscado.toLowerCase()
            return textoTarea.includes(textBuscado)
        }
    )
    response.send(tareasBuscadas)
})

todoListApp.post("/tarea", (request, response) => {
    const body = request.body
    console.log(body)
    contenidoLista.push(body)
    response.sendstatus(200)
})

todoListApp.patch("/tarea", (request, response) => {
    const body = request.body
    const texto = body.texto
    const nuevoEstado = body.completada
    const indice = contenidoLista.findIndex(tarea => tarea.texto === texto)
    contenidoLista[indice].completada = nuevoEstado
    console.log(contenidoLista[indice])
    response.sendstatus(200)
})

todoListApp.delete("/tarea/:valorBuscado", (request, response) => {
    const { valorBuscado } = request.params
    const indice = contenidoLista.findIndex(tarea => tarea.texto === valorBuscado)
    console.log(indice)
    if(indice >= 0){
        contenidoLista.splice(indice, 1)
        response.sendstatus
    }else{
        response.sendstatus(404)
    }
})

