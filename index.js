/* console.log('Мой первый коммит');
console.log('Мой второй коммит');
console.log('Мой третий коммит');

const getValue = require ('./helpers/array.js')


 */

/* import  getValue from './helpers/array.js' ; */
/* 
import {getValue, getValue2 } from "./helpers/array.js";

console.log(getValue());
console.log(getValue2()); */


async function init (){
    if (false) {
       const {getValue} = await import ("./helpers/array.js");
    console.log(getValue()); 
    }
}

init();

