console.log('Hello World');

//CONST Y LET

//var no se debe usar: Utilizamos let o const pero no var.

const nombre = 'Ángel';
let apellido = 'Garrido';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

//SCOPE

if ( true ) {
    let valorDado = 6;

    console.log (valorDado)//6
};

console.log(valorDado);//4

