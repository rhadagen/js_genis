/*
console.log("Operadorsitos");
console.log("Hola,\n¿Como estás?");
console.log("si, señor");
*/
/*
// CAMBIAR EL TIPO A UNA VARIABLE
var noEsUnNúmero = "10";
//TIPO STRING   
console.log(typeof noEsUnNúmero);
var numero = +noEsUnNúmero;
//TIPO NÚMERO
console.log(typeof numero);
*/
//OTRA MANERA DE CAMBIAR EL TIPO CON MÁS CLARIDAD PARA COMUNICACIÓN CON OTROS PROGRAMADORES

//var NoEsUnNúmero = "10";
//var numero1 = Number(NoEsUnNúmero)



//OPERADORES MATEMÁTICOS
// SUMA SIMPLE RECONOCER COMO NUMERO NO COMO STRING
//console.log(10 + 10);

//LA MULTIPLICACIÓN ES EL ÚNICO OPERADOR QUE PUEDE LLEGAR A PERMITIR EL STRING PARA RESOLVER
//NOTA, NO ES UNA BUENA PRÁCTICA. HAY QUE HACERLO SIEMPRE COMO NUMERO
/*console.log("20" * "20");*/

//DIVISIÓN
//console.log(20 / 2);

//EXPONENCIAL
//console.log(20 ** 100);

//CONDICIONANTES CONDICIONANTES CONDICIONANTES
//******************
/*
var numeroA = 10;
var numeroB = 20;
console.log(numeroA < numeroB);
*/
//MENOR O IGUAL Y MAYOR O IGUAL QUE
/*
var numeroA = 10;
var numeroB = 20; 
console.log(numeroA <= numeroB);  */

//PARA CONSULTAR CIERTO O FALSO SE REQUIEREN DOS == 
//SI SE OCUPA SOLO UNO EL PROGRAMA LO TOMARÁ COMO UNA REASIGNACIÓN DE VALORES
//USAR TRIPLE IGUAL === ES MÁS ESPECÍFICO Y ACTUALIZADO 
/*
var numeroA = 10;
var numeroB = 30;
console.log(numeroA === numeroB); */

/*var saludo
console.log(saludo);*/
//EN EL EJEMPLO DE ARRIBA LA VARIABLE NO SE ASIGNÓ
//EN EL EJ DE ABAJO SE LE ASIGNÓ UN NULL 
/*var mensajes = null
console.log(mensajes); */

//VAR Y LET SE UTILIZAN PARA DECLARAR VARIABLES
//SIN EMBARGO LET* AYUDA A TENER UN MEJOR CONTROL Y EVITAR ERRORES O REEMPLAZOS EN LAS VARIABLES



//OPERADOR LÓGICO

//EL OPERADOR SE REALIZA LA OPERACIÓN Y SE GUARDA CON EL VALOR QUE RESULTÓ
//LA OPERACIÓN PODRÁ SER +=, *=, /=, **=, %= ENTRE OTROS. TIP = BUSCAR MÁS
/*
let numero = 10;
console.log(numero += 3);
//UNA MANERA ES:
console.log(`El nuevo número es ${numero}`);
//OTRA MANERA ES:
//CONCATENANDO Y AÑADIENDO EL + VARIABLE 
console.log("El nuevo número es " + "" + numero );
*/


//OPERADOR AND &
//EVALÚA SI EL VALOR DE UNA VARIABLE ES TRUE O FALSE
//EVALÚA CUANDO TODAS LAS VAR SON "TRUE"

/*let mensajes = false
let noticias = true
console.log(mensajes && noticias)
*/

//OPERADOR OR
//RETORNA UN TRUE SI ALGUNA DE LAS DOS CONDICIONES ES VERDADERA
/*let memes = true
let mensajes = true
let noticias = false
console.log(mensajes || noticias ||memes)
*/

//FRONT USOS CON OPERADOR OR 
/* let mensajes = 0;
let numeroDeMensajes = mensajes || "no hay mensajes"
console.log(numeroDeMensajes);
*/

