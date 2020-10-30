//Arreglos - Arrays

const arreglo = new Array( 100 );//por norma genera se pone así solo cuando queremos marcar un número fijo de posiciones del array, 100 en este caso, si fuera vacío lo pondríamos con corchetes
console.log( arreglo);//[empty × 100]

arreglo.push(1);

console.log( arreglo); //[empty × 100, 1]

// Normalmente crearemos los Arrays con []

const arreglo2 = [];
console.log( arreglo2 );//[]

arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);

console.log( arreglo2 );//[1, 2, 3, 4]

const arreglo3 = [5,6,7,8];
console.log( arreglo3);//[5, 6, 7, 8]

//Ojo, no es recomendable usar el push porque el push modifica el objeto principal
//Para insertar algo es mejor usar el el operador spread:

// Vamos a evitar aumentar el arreglo4 como hemos hecho en el texto comentado:
// let arreglo4 = arreglo2;
//
// arreglo4.push( 5 ); Vamos a evitar aumentar arreglo
// console.log( arreglo2 );//[1, 2, 3, 4, 5] - El push también modifica arreglo2
// console.log( arreglo4 );//[1, 2, 3, 4, 5]

let arreglo4 = [arreglo2, 5];
console.log( arreglo2 );//[1, 2, 3, 4]
console.log( arreglo4 );//[Array(4), 5] //Esto no me vale para conseguir el mismo resultado que con el push así que probamos:

//CREAR NUEVOS ARRAYS A PARTIR DE OTROS ARRAYS: .map() y spread '...'


// Método Spread '...'

arreglo4 = [...arreglo2, 5];
let arreglo5 = [ 0, ...arreglo2 ]
console.log( arreglo2 );//[1, 2, 3, 4]
console.log( arreglo4 );//[1, 2, 3, 4, 5]
console.log( arreglo5 );//[0, 1, 2, 3, 4]

// Método .map(): Crea un nuevo array con los resultados de la llamada la función indicada aplicados a cada uno de sus elementos:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map

//Multiplicamos todos los valores del arreglo2 x 2 usando .map();
let arreglo6 = arreglo2.map( function (numero){
    return numero * 2;
});//
console.log(arreglo6);//[2, 4, 6, 8]
console.log( arreglo2 );//[1, 2, 3, 4] //No modifica los arreglos anteriores
