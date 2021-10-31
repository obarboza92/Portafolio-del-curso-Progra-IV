function hola(nombre :string){
    return 'Hola ' + nombre;
}

var persona = 'Orlando';
let message: string = hola(persona);

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);
