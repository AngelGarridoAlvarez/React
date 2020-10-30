//## 1. Import, Export y Funciones Comunes de Arrays

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find

import { heroes } from './data/heroes' //he tenido que hacer export en data/heroes.js
import heroes2, { owners } from './data/heroes2'
// * el import de heroes2 prescinde de las llaves porque he usado export default en heroes2 en lugar de export a secas
// * en heroes2 he exportado el array owners sin hacerlo por defecto (default) y puedo importar ambos objetos en una sola línea
// * se pueden hacer todas las exportaciones en un solo export (mirar heroes3)
import { misHeroes, misOwners } from './data/heroes3'



console.log(heroes[0].name);//Batman
console.log(heroes2[1].name);//Spiderman
console.log(owners);//["DC", "Marvel"]
console.log('Mis Heroes + Mis Owners', misHeroes, misOwners);
// Mis Heroes + Mis Owners , [{…}, {…}, {…}, {…}, {…}] , ["DC", "Marvel"]

//Find: devuelve solo un resultado

const getHeroById = id => heroes.find(heroe => heroe.id === id);

console.log( 'Chosen Hero', getHeroById(2) );


//Filter: devuelve varios resultados
const getHeroByOwner = owner => heroes.filter(heroe => heroe.owner === owner);

console.log( 'Heroes by Owner', getHeroByOwner('DC') );

// 0: {id: 1, name: "Batman", owner: "DC"}
// 1: {id: 3, name: "Superman", owner: "DC"}
// 2: {id: 4, name: "Flash", owner: "DC"}


//## 2. Importaciones y exportaciones multiples







//Hacemos Destructuring para repasar:

const [p1, p2, p3, p4, p5] = heroes;

console.log(p1);//{id: 1, name: "Batman", owner: "DC"}
console.log(p2.name);//Spiderman

const {name: superHero3} = p3;
console.log(superHero3)//Superman

const {name: superHero4} = p4;
console.log(superHero4)//Flash