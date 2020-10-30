//FUNCIONES EN JS

//esta no es una buena forma para crear funciones porque se pueden sobreescribir los datos

function saludar(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar('Manuel'));//Hola, Manuel

saludar = 30;//sopongamos que renombro saludar accidentalmente
console.log(saludar);//30, //me he 'cargado' mi función saludar

//Método recomendable para crear funciones

const saludar2 = function (nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar2('Manuel'));//Hola, Manuel

//saludar2 = 30;//sopongamos que renombro saludar accidentalmente --> en este caso me peta la aplicación

//TRANSFORMAR EN FUNCIÓN FLECHA

const saludar3 = nombre => `Hola, ${nombre}`; //al solo tener un return no hace falta ponerlo y al tener un solo parámetro no hace falta poner paréntesis

console.log(saludar3('Pepe'));//Hola, Pepe

const saludar4 = () => 'Hello World';// al no tener parámetros es necesario poner paréntesis
console.log(saludar4());//Hello World

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Papi_chulo_23'
    }
}

console.log(getUser());//{uid: "ABC123", username: "Papi_chulo_23"}

//Aquí no puedo simplemente quitar el return aunque solo devuelva un objeto, hay que añadir paréntesis para que javascript identifique que tiene que devolver un objeto:

const getUser2 = () => ({
    uid: 'CBA321',
    username: 'Chulo_papi_32'
})

console.log(getUser2());//{uid: "CBA321", username: "Chulo_papi_32"}

//sería más correcto poner:

const user = getUser2();
console.log(user);//{uid: "CBA321", username: "Chulo_papi_32"}

//Tarea

function  getUsuarioActivo( nombre ) {
    return {
        uid:'DEP666',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Frostys de Kellogs');
console.log( usuarioActivo );//{uid: "DEP666", username: "Frostys de Kellogs"}

//1. Pasar a función flechar // 2. Retornar un objeto implícito

const getUsuarioActivo2 = nombre => ({
    uid:'DEP666',
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Chocapic');
console.log( usuarioActivo2 );//{uid: "DEP666", username: "Chocapic"}
