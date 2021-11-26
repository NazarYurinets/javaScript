//
// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calcSqure(a, b){
//     return a * b;
// }
// let square = calcSqure (5,10);
// console.log(square)
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function squareR(r) {
//      return Math.round(Math.PI * r ** 2);
//  }
//
//  let squareCircle = squareR(2);
//  console.log(squareCircle);

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function calcCylinder(r, h) {
//     let sCylinder = 2 * 3.14 * r * h;
//      return sCylinder;
//  }
//  console.log(calcCylinder(10,10))
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
// function showelement(show){
// for (let  i = 0; i < show.length ; i++ ){
//     console.log(show[i])
// }
// }
// let show = [1,2,3,4]
// showelement(show)
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function paragraf (text) {
//     document.write(`<p>${text} </p>`)
// }
// paragraf("hello world")
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function arrey (text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// arrey("hello world")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function create(text, number1) {
//
//     for (let i = 0; i < number1; i++){
//         document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//     }
// }
// create("hello world", 9);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
 let creatarray = [true,"name", 111, "nazar"];
 function primitives (array){
    document.write(`<ul>`)
         for (let i = 0; i < array.length; i++) {
            document.write(`<li>${array[i]}</li>`);
        }
     document.write(`</ul>`)
 }
 primitives(creatarray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить

 let firstArray = [{id: 1, name: "vasia", age: 13},{id: 2, name: "pavlo", age: 23},{id: 3, name: "sasha", age: 54}]
function myArray(arr) {
    for (const arrItem of arr){
        document.write(`<div>${arrItem.id}${arrItem.name}${arrItem.age}</div>`)
    }
}
myArray(firstArray)