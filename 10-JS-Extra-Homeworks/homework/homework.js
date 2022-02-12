// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz =[];
  for(let clave in objeto){
    matriz.push([clave, objeto[clave]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  for(var i = 0;i < string.length;i++){
    if(string[i] in obj){
      obj[string[i]]++;
    } else {
      obj[string[i]] = 1;
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = '';
  var min = '';
  for(var i = 0;i < s.length;i++){
    if(s[i] === s[i].toUpperCase()){
      may = may + s[i];
    }else{
      min = min + s[i];
    }
  }
  return may + min;

  /* Otra forma */
  var mayus = '';
  var minus = '';
  for(var i = 0;i < s.length;i++){
    if(s[i] === s[i].toLowerCase()){
      minus += s[i];
    }else{
      mayus += s[i];
    }
  }
  return mayus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var invertir = str.split(' ').map(function(x){ //split, separa las palabras en un array
    return x.split('').reverse().join(''); // slipt, separa las letras en un array // reverse, las invierte // join, las concatena en un string
  })
  return invertir.join(' '); // join concatena las palabras en una frase
} //map, reverse y join son metodos que solo pertenecen a arrays


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var invert = numero.toString().split('').reverse().join('');
  if(numero.toString() === invert){
    return 'Es capicua';
  }
  return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena='';
  for(var i = 0;i < cadena.length;i++){
    if(cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c')continue; //sirve para omitir la siguiente línea de codigo y continua el ciclo
    else{
      nuevaCadena = nuevaCadena + cadena[i];
    }
  }
  /* if(cadena.includes('a') || cadena.includes('b') || cadena.includes('c')){
    return nuevaCadena;
  } 
  // Esta expresión es para cuando se usa el statment Break*/
  return nuevaCadena;

  /* Otra forma */
  var sinAbc = '';
  for(i = 0;i < cadena.length;i++){
    if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c'){
      sinAbc += cadena[i];
    }
  }
  return sinAbc;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var cambio = true;
  while(cambio){
    cambio = false;
    for(i=0;i<arr.length -1;i++){
      if(arr[i].length > arr[i+1].length){
        var aux = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = aux;
        cambio = true;
      }
    }
  } // Acá se esta moviendo el ciclo while con valores boleanos, para que pueda inicar el ciclo y tambien usa el for como condicional
  return arr;
}
/* Se usa el while para poder parar y reiniciar el ciclo for una vez que se hace una modificación, para así poder medir los valores otra vez.
Si no se hizo ninguna modificación en el array entonces el ciclo for continua */


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var nuevoA = [];
  var i = 0;
  var e = 0;
  while(i < arreglo1.length){
    while(e < arreglo2.length){
      if(arreglo1[i] === arreglo2[e]){
        nuevoA.push(arreglo1[i])
      }
      e++;
    }
    e = 0;
    i++;
  }
  return nuevoA;
  
  /* Otra forma */
  var nuevoA = [];
  for(var i = 0;i < arreglo1.length;i++){
    for(var e = 0; e < arreglo2.length;e++){
      if(arreglo1[i] === arreglo2[e]){
        nuevoA.push(arreglo2[e])
      }
    }
    e=0;
  }
  return nuevoA;  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

