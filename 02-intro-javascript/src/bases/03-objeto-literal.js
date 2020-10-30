//Objetos literales

const persona =  {
    nombre: 'Angelo',
    apellido: 'Garridini',
    edad: 38,
    dirección: {
        ciudad: 'Jerez de la Fra.',
        zip: '11407',
    }
};

console.log(persona.nombre);//Angelo
console.log( {persona});// es lo mismo que poner console.log( {persona:persona}) por ser el mismo nombre
console.log( {angel : persona});//he creado un nuevo objeto con los valores de persona

const persona2 = persona;//OJO: no se ha creado un nuevo objeto, persona2 ha ocupado el espacio de memoria de persona
persona2.nombre = 'peter';
console.log(persona.nombre);//peter
console.log(persona2.nombre);//peter

//Para hacer un clon del objeto utilizamos '...'

const persona3 = { ...persona};
persona3.nombre = 'Clark';
console.log(persona.nombre);//Peter - Esta vez no ha ocupado el espacio de memoria de persona
console.log(persona3.nombre);//Clark
console.log(persona3.dirección.ciudad);//Jerez de la Fra.