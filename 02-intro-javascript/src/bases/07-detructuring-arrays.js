const personajes = ['Goku','Vegeta','Trunks'];
const [ p1 ] = personajes;
console.log( p1 );//Goku;

const [ , , p3] = personajes;
console.log( p3 );//Trunks;

const [ ,p2] = personajes;
console.log( p2 );//Vegeta;

const [a1 ,a2, a3] = personajes;
console.log(a1);//Goku
console.log(a2);//Vegeta
console.log(a3);//Trunks

const retornaArreglo = () =>{
    return ['ABC',123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);//ABC 123


//Tarea

const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hello World')}];
}

const [ nombre, setNombre] = useState( 'Goku' );

console.log( nombre );//Goku
setNombre();//Hello World


//Queremos que console.log( nombre ) devuelva Goku;
