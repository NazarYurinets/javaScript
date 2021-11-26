// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNumber = (a, b, c) => {
//     if(a < b && a < c){
//         if(b < c){
//             console.log(a, b, c)
//         } else {
//             console.log(a, c, b)
//         }
//     } else if(b < a && b < c){
//         if(a < c){
//             console.log(b, a, c)
//         } else {
//             console.log(c, b, a)
//         }
//     }else {
//         if (a < b){
//             console.log(c, a, b)
//         } else {
//             console.log(c, b, a)
//         }
//     }
// }
//
// minNumber(1, 30, 75);
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (a, b, c) => {
//     if(a > b && a > c){
//         console.log(a)
//     } else if (b > a && b > c){
//         console.log(b)
//     }else {
//         console.log(c)
//     }
// }
// maxNumber(124,5435,54656)


//- створити функцію яка повертає найбільше число з масиву

//  let maxNumb = (arr) => {
//      let max = arr[0];
//     for (let number of arr) {
//         if (number > max) {
//             max = number;
//         }
//      }
// console.log(max);
//  };
//  maxNumb([10,30,40])
//
// //
// // - створити функцію яка повертає найменьше число з масиву
// let minNumb = (arr) => {
//     let min = arr[0];
//     for (let number of arr) {
//         if (number < min){
//             min = number;
//         }
//     }
//     console.log(min)
// }
// minNumb([10,20,30,50])
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//  let sumElement = (array) =>{
//      let sum = 0;
//      for (let i =0; i < array.length; i++) {
//           sum += array[i];
//     }
//      console.log(sum)
//  }
//
// sumElement([1,2,4,6])

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let retMax = (array) => {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max) {
//             max = item;
//         } else if (item < min) {
//             min = item;
//         }
//     }
//     console.log(max)
//     return min;
// }
//  retMax(-10, 10, -123,

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomizer = (length) =>{
//     let array = []
//     for(let i = 0; i < length; i++){
//         array.push(Math.floor(Math.random()*100))
//     }
// return array;
// }
// console.log(randomizer(12))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomizer = (limit, lenght) => {
    let arr = [];
    for (let i = 0; i < lenght; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
    console.log(arr);
}

randomizer(20, 10);
// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
let array = [1, 2, 3, 4]
const reverse = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1, a = 0; i >= 0; i--, a++) {
        newArr[a] = arr[i];
    }

    return newArr;
}
console.log(reverse(array));