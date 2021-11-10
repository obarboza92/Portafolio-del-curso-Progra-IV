function hola(nombre) {
    return "Hola " + nombre;
}
var persona = "Orlando";
var message = hola(persona);
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
