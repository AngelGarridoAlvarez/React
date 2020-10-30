//DESTRUCTURACIÓN DE OBJETOS - Aisgnación Desestructurante

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

const persona = {
    nombre: 'Ángel GG',
    edad: 61,
    clave: 'Papi_Chulo'
};

console.log(persona.nombre);//Ángel GG
console.log(persona.edad);//61
console.log(persona.clave);//Papi_Chulo

//escribir persona.loQueSea es tedioso, para eso usamos el destructuring:

const { nombre } = persona;
console.log( nombre )// Ángel GG

const { clave: calvePapi} = persona;//puedo asignar diferentes valores a las propiedades de mi objeto para llamarlas usando destructuring
console.log( calvePapi )// Papi_Chulo

//Puedo hacerlo con todas las propiedades a la vez para ahorra tiempo, es lo más común:

const { edad, clave } = persona; //el orden no importa

console.log(nombre);//Ángel GG
console.log(edad);//61
console.log(clave);//Papi_Chulo

//Podemos usar el destructuring dentro de funciones
const retornaPersona = usuario => {

    const { edad, clave, nombre } = persona;

    console.log(usuario);
};

retornaPersona( nombre );//Ángel GG

//También puedo usar la desestructuración en el argumento y añadir propiedades no predefinidas en persona como Rango


const retornaPersona2 = ({ nombre, edad, rango = '(super padre del año'}) => console.log( `Soy ${nombre}, ${rango}, y tengo ${edad} años` );

retornaPersona2( persona );//Soy Ángel GG, super padre del año, y tengo 61 años

const useContext = ({ clave, nombre ,edad , rango = 'Super Papi Chulo'}) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng }} = useContext( persona );

console.log(nombreClave, anios);
console.log(lat, lng)//14.1232 -12.3232