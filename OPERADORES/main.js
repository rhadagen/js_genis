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


//FALSY AND TRUTHY

//TOMANDO DECISIONES  IF AND ELSE
//QUE ES UN BLOCK O BLOQUE?
//LOS DEFINIMOS CON PARÉNTESIS Y CORCHETES

// IF BÁSICO BLOQUE
/*if  (10 > 5){
console.log ("EN EFECTO")
}
*/

//IF - ELSE BÁSICA
/*
if  (10 < 100){
console.log ("ES VERDAD");
} else {
console.log("NO ES VERDAD");
}
*/

//ELSE - IF 
/*
let num = 100 
let nume = 1000
let numeros = 5

if(num < nume){
    console.log (`el numero ${num} es menor ${nume}`)
} 
else if (nume === numeros){
    console.log(`el numero ${nume} es igual al numero ${numeros}`)
} else {
    console.log ("nada es verdad")
}
*/

//pertenezco a uno de los siguientes grupos y me quiero vacunar
//mayores de 18 años que residen en un municipio fronterizo del norte del país
//embarazadas mayores de 18 años con más de nueve semanas de gestación 
//personas que cumplen 30 años o más este año 


/*
var edad = prompt('Ingresa tu edad');
edad = Number(edad);
var locacion = '';
var genero = '';
if(edad >= 18) {
    locacion = prompt('Resides en un municipio fronterizo del Norte del país? S/N');
    genero = prompt('¿Cuál es tu género? H/M');
}
var embarazo = '';
if(genero === 'M' && edad >= 18) {
    embarazo = prompt('Actualmente te encuentras embarazada? S/N');
} 

// Definir de acuerdo a las variables si puedes ser vacunadx
if(edad >= 30 && embarazo === 'N' ) {
    console.log('MAYOR DE 30, sí puedes vacunarte');
} else if(edad >= 18 && genero === 'M' && embarazo === 'S') {
    console.log('EMBARAZADA, sí puedes vacunarte');
} else if(edad >= 18 && locacion === 'S') {
    console.log('FRONTERIZO, sí puedes vacunarte');
} else {
    console.log('no hay vacunas para ti');
}*/

/*
var color = "";
color = prompt("¿QUÉ COLOR ELIGES? NEGRO / BLANCO / GRIS ?");
if(color === "NEGRO"){
console.log("YOUR CHOICE IS BLACK")
}
if(color === "BLANCO"){
console.log("YOUR CHOICE IS WHITE");
}
if(color ==="GRIS"){
console.log("YOUR CHOICE IS GRAY")
}
*/
/*
var edad = "";
edad = Number(edad);
var genero ="";
edad = prompt("¿QUÉ EDAD TIENES?");
if(edad >= 18){
genero = prompt("¿Cuál es tu género?")
}

var embarazo
if(genero === "M"){
embarazo = prompt("¿Estás embarazada?")
}
var gestación ="" ;
if(embarazo==="SI"){
gestación = prompt("¿Tienes más de 9 semanas de embarazo?");
console.log("HAZ CLICK AQUÍ PARA INICIAR REGISTRO DE VACUNA")
}




//AQUI SE TERMINA
else {
    console.log("LO SENTIMOS, NO ESTÁS DENTRO DEL GRUPO DISPONIBLE")
}
*/


// Ejercicios IF-ELSE

// 1. Solicitar al usuario que responda a la pregunta ("¿Eres bellisimo/a?"), en caso de contestar sí, responder "Ciertamente", en caso de contestar no, responder: "No te creo".
/*
var bello = "SI";
var bellx = "NO";
var pregunta =""
pregunta=prompt("¿ERES BELLISÍSIMA?");
if(pregunta==="SI"){
console.log("CIERTAMENTE");
} 
if(pregunta === "NO"){
console.log("NO TE CREO")
}
*/

// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de "x número es divisible entre 2" o "x núm
/*

var introduceNumero="";
introduceNumero= Number(introduceNumero);
introduceNumero = prompt("INTRODUCE NUMERO");
if(introduceNumero /2){
console.log(introduceNumero + " " + "ES UN NUMERO ES DIVISIBLE ENTRE 2")
}

*/




// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.


// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje "Lo sentimos, sigue participando".
// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima "reprobado" si la calificación es inferior a 6, "regular" si está entre 6 y 8, "bien" si es 9, y por último, "excelente" si es 10.
// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará "no tenemos este topping, lo sentimos." y a continuación le informará el precio del helado sin ningún topping.

// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
// Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN

var nivel = prompt('Qué nivel de curso estás tomando? Course/Carrera/Master');
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
var beca = prompt('Cuentas con alguna beca? Fb/Google/Jesua/No')
var descuento = 0;
if (beca === 'Fb') {
    descuento = 20;
} else if (beca === 'Google') {
    descuento = 15;
} else if (beca === 'Jesua') {
    descuento = 50;
}
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses

if(nivel === 'Course') {
 var mensualidad = 4999 - 4999*descuento/100;
 var totalCurso = mensualidad*2;
} else if (nivel === 'Carrera') {
    var mensualidad = 3999 - 3999*descuento/100;
    var totalCurso = mensualidad*6;
} else if (nivel === 'Master') {
    var mensualidad = 2999 - 2999*descuento/100;
    var totalCurso = mensualidad*12;
}

console.log(`Tu curso es ${nivel} y pagarás una mensualidad de $${mensualidad} y un total de $${totalCurso}`);


// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es "coche", el precio kilometro ha de ser 0.20, si es "moto" ha de ser 0.10 y si es "autobús" 0.5. 
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué: 
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.