// function getFirstElementOfArray (array) {
//   return array[0];
// }
// let array = ['madrid', 'barcelona', 'miami'];
// let firstElement = getFirstElementOfArray(array);
// console.log(firstElement);

// function readFile (file) {
//   // read the File
//   return contentFile.length;
// }
// let textSize = readFile("odyssey.txt");
// console.log(textSize);

// let counter = 1;
// let callbackFunction = function () {
//   console.log(counter);
//   timeoutId = setTimeout(callbackFunction, 1000);
  
//   counter += 1;
//   if (counter > 10) {
//     clearTimeout(timeoutId);
//   }
// }
// let timeoutId = setTimeout(callbackFunction, 1000);

// let i = 1;
// let intervalId = setInterval(function () {
//   console.log(i);
    
//     i++;

//     if (i > 10) {
//       clearInterval(intervalId);
//     }
// }, 1000);

let i = 10;
let intervalId = setInterval(function () {
  if (i > 0) {
    console.log(i);
  } else {
    console.log('pop!');
    clearInterval(intervalId);
  }

  i--;
}, 1000);