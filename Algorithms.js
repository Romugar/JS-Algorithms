//-------------------------------//
// FIND THE SYMMETRIC DIFFERENCE //
//-------------------------------//
// The mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both

// Pasamos los arrays a la funcion con el rest operator
function sym(...args) {
  // creamos un array para ir metiendo el resultado de las diferencias simetricas de los pares de arrays
  let solution = [];
  // ejecutamos el algoritmo hasta que quede solo un array
  while (args.length > 1) {
    // filtramos el primer array y nos quedamos con los valores que no esten en el segundo array
    // filtramos el segundo array y nos quedamos con los valores que no esten en el primer array
    // concatenamos lo anterior para tener el resultado junto en un array
    // guardamos el resultado en la variable solution
    solution = args[0]
      .filter(d => args[1].indexOf(d) == -1)
      .concat(args[1].filter(d => args[0].indexOf(d) == -1));
    // borramos los dos primeros arrays de args
    args.splice(0, 2);
    // quitamos los duplicados del array del resultado
    solution = solution.filter((d, i) => solution.indexOf(d) == i);
    // añadimos el array del resultado al principio de args, el algoritmo se repite hasta que quede solo un array que sera el resultado
    args.unshift(solution);
  }
  return solution;
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);

//------------------//
// INVENTORY UPDATE //
//------------------//
// Update the current existing inventory item quantities (in arr1).
// If an item cannot be found, add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
  // iteramos el nuevo inventario
  for (let i = 0; i < arr2.length; i++) {
    // inicializamos el marcador que nos indicara si el articulo es nuevo o esta repetido
    let a = 0;
    // por cada articulo del nuevo inventario iteramos el inventario actual
    for (let j = 0; j < arr1.length; j++) {
      // en el momento que coincidan dos nombres se suman los valores
      if (arr2[i][1] == arr1[j][1]) {
        arr1[j][0] = arr1[j][0] + arr2[i][0];
      // si no hay coincidencia en esta iteracion se suma uno al marcador
      } else {
        a++;
      }
    }
    // si el marcador es igual al numero de items del inventario es que no ha habido ninguna coincidencia
    // asi que que añadimos el item del nuevo intentario al antiguo
    if (a == arr1.length) {
      arr1.push(arr2[i]);
    }
  }
  // se ordena el array por nombres con un sort, compara indices 1 por pares y si el primero es mayor se queda y si es menor cambian de posicion.
  arr1.sort(function(a, b) {
    return a[1] > b[1] ? 1 : -1;
  });
  console.log(arr1);
  return arr1;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

//-------------------//
// NO REPEATS PLEASE //
//-------------------//
// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// Assume that all characters in the provided string are each unique.

// Coming soon

//----------//
// PAIRWISE //
//----------//
// find element pairs whose sum equal the second argument arg and return the sum of their indices.
// Once an element has been used it cannot be reused to pair with another element.


function pairwise(arr, arg) {
  // aqui iremos guardando el resultado de sumar todos los indices de los pares que sean correctos
  let resultado = 0;
  // iteramos el array
  for ( let i = 0; i < arr.length; i++ ) {
    // hacemos otra iteracion del array por cada indice del bucle anterior    
    for ( let j = 0; j < arr.length; j++ ) {
      // si la suma es igual a lo esperado y no es el mismo indice (no se puede sumar el valor de un indice consigo mismo)
      // se suma la suma de los indices al resultado y se cambia el valor por "" para que no se pueda volver a usar
      if (arr[i] + arr[j] === arg && i !== j) {
        resultado = resultado + i + j;        
        arr[i] = "";
        arr[j] = "";
      }
    }
  }
return resultado;
}

pairwise([1,4,2,3,0,5], 7);

//-------------//
// BUBBLE SORT //
//-------------//
// The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end,
// iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order.
// The method continues looping through the array until no swaps occur at which point the array is sorted.


function bubbleSort(array) {
  // variable que parara el while cuando el array este ordenado  
  let check = true;
  // mientras el array este desordenado seguira iterandolo  
  while (check) {
    // variable que  cuenta el numero de cambios en el array en cada iteracion, cuando no halla ningún cambio sera 0 y el while parara y devolvera el array ordenado
    let changes = 0;
    // itera el array hasta el penultimo elemento
    for (let i = 0; i < array.length - 1; i++) {        
      if (array[i] > array [i + 1]) {
        // si un elemento es mayor que el siguiente, lo guarda en biggerNumber y lo cambia por el siguiente elemento
        let biggerNumber  = array.splice(i, 1, array[i + 1]) 
        // el numero mayor que hemos guardado lo ponemos en el siguiente indice            
        array[i + 1] = biggerNumber[0]
        // cuenta un cambio en el array
        changes ++;            
      }
    }
    // si no ha habido cambios en esta iteracion se corta el while y se llega al return array
    if (changes === 0) {
      check = false;
    }
  } 
  return array;
}

const test = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
console.log(bubbleSort(test));