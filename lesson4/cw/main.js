// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumber(a, b, c) {
    if(a < b && a < c){
        if(b < c){
            console.log(a, b, c)
        } else {
            console.log(a, c, b)
        }
    } else if(b < a && b < c){
        if(a < c){
            console.log(b, a, c)
        } else {
            console.log(c, b, a)
        }
    }else {
        if (a < b){
            console.log(c, a, b)
        } else {
            console.log(c, b, a)
        }
    }
}

minNumber(1, 30, 75);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber(a, b, c) {
    if(a > b && a > c){
        console.log(a)
    } else if (b > a && b > c){
        console.log(b)
    }else {
        console.log(c)
    }
}
maxNumber(124,5435,54656)


// - створити функцію яка повертає найбільше число з масиву
// let array = [24,457,2364,2]
//  function maxNumb(arr) {
//      let max = arr[0];
//     for (let number of arr) {
//         if (number > max) {
//             max = number;
//         }
//      }
//      return max;
//  }
//
//  console.log(maxNumb(array));
//
// // - створити функцію яка повертає найменьше число з масиву
// let array = [1,3,5,7]
// function minNumb(arr){
//     let min = arr[0];
//     for (let number of arr) {
//         if (number < min){
//             min = number;
//         }
//     }
//     return min;
// }
// console.log(minNumb(array));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//  let sumArray = [12,2,3,4];
//  function sumElement (array){
//      let sum = 0;
//      for (const arrayElement of array) {
//           sum += arrayElement;
//         sum = arrayElement + sum;
//     }
//     return sum;
//  }
//  console.log(sumElement(sumArray))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let sumArray = [12,2,3,4];
// function sumElement (array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//         sum = arrayElement + sum;
//     }
//     return sum/array.length;
// }
// console.log(sumElement(sumArray))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function retMInLogMax(array) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let item of arguments) {
//         if (item > max) {
//             max = item;
//         } else if (item < min) {
//             min = item;
//         }
//     }
//     console.log(max)
//     return min;
// }
//
// let numbers = retMInLogMax(5,3,1,7);
// console.log(numbers);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomaizer(arr){
//     for(let i = 0; i < 10; i++){
//         arr[i] = Math.round(Math.random() * 100);
//     }
// return arr;
// }


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomizer(limit, lenght) {
    let arr = [];
    for (let i = 0; i < lenght; i++) {
        arr[i] = Math.round(Math.random() * limit);
     }
     console.log(arr);
 }

 randomizer(20, 10);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let array = [1,2,3,4,5,6];
 let array2 = [];
 let index = 0;

 function reverseArr(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        array2[index] = array[i];
        index++;
    }
    return array2;
}

 console.log(reverseArr(array));
