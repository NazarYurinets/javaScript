// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// let square = (a,b) => {return a * b}
// console.log(square(3,5))
//
// // - створити функцію яка обчислює та повертає площу кола
// let circleArea = (s) => {return Math.round(Math.PI * s **2)}
// console.log(circleArea(2))
//
// // - створити функцію яка обчислює та повертає площу циліндру
// let cylinder = (a, b) => {return 2 * 3.14 * a * b}
// console.log(cylinder(2,2))
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,3,5, "number"]
//
// const allArray = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// allArray(arr)
// // - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let paragraph = (text) => {
//     for (let i = 0; i < 10; i++){
//         document.write(`<p>${i} - ${text}</p>`);
//
//     }
// }
// paragraph("hello");
//
// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let createUl = (text) => {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// createUl("hello world")
// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let createLi = (text, number) => {
//     for (let i = 0; i < number.length; i++){
//         document.write(`<ul>`)
//         document.write(`<li>${i} ${text}</li>`)
// //         document.write(`</ul>`)
// //     }
// // }
// createLi("hi", 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayElement = [123,434,6,true,"name",false, "okten"];
const createArr = (array) =>{
    document.write(`<ol>`)
    for(let i = 0; i < array.length; i++){
        document.write(`<li>${array[i]}</li>`)

    }
    document.write(`</ol>`)
}
createArr(arrayElement)




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let firstArray = [{id: 1, name: "vasia", age: 13},{id: 2, name: "pavlo", age: 23},{id: 3, name: "sasha", age: 54}]
let myArray = (arr) => {
    for (const arrItem of arr){
        document.write(`<div>${arrItem.id} ${arrItem.name} ${arrItem.age}</div>`)
    }
}
myArray(firstArray)