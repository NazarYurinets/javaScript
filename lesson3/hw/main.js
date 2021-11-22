// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let a = [12, 33, 47, 34, 65,];
// let b = ["name", "page", "user", "red", "yellow"];
// let c = [1999, 23, "bird", true, false ];
// console.log(a)
// console.log(b)
// console.log(c)

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let xxx =[]
//
// xxx[0] = 1;
// xxx[1] = 2;
// xxx[2] = 44;
// console.log(xxx)



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i <= 10; i++) {
// document.write('<div>red</div>');
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div> ${i} red</div>`)
// }



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


// let i = 0;
// while (i <= 20){
//     document.write(`<h1>text1</h1>`)
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let q = 0;
// while (q <= 20){
//     document.write(`<hi> ${q} xxx</hi> `)
//     q++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 1; i <= number.length; i++ ){
//     console.log(number[2])
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

//  let string = ["page1","page2","page3","page4","page5","page6","page7", "page8","page9","page10"];
// for (i = 0; i <= string.length; i++ ){
//     console.log(string[1])
// }

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let stringArr = ["page1",12,"page3",12,"page5",1111,"page7", 123,"page9",123];
// for (i = 5; i <= stringArr.length; i++ ){
//     console.log(stringArr[6])
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let all = [true, 123, 234, "qwe",true, 123, false, "qwe",123, false ];
// for (i = 0; i <= all.length; i++ ){
//     if (typeof all[i] ==="boolean"){
//         console.log(all[i])
// }
// }
//
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let allArr = [true, 123, 234, "qwe",true, 123, 234, "qwe",123, false ];
// for (i = 0; i <= allArr.length; i++ ){
//     if (typeof allArr[i] ==="number"){
//         console.log(allArr[i])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let all = [true, 123, 234, "qwe",true, "123", 234, "qwe",123, false ];
 for (let i = 0; i <= all.length; i++ ){
     const allArr = all[i];
     if (typeof allArr ==="string"){
         console.log(allArr);
     }
 }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let strArr = []
strArr[1] = 12
strArr[2] = 12
strArr[3] = 23
strArr[4] = 44
strArr[5] = 145
strArr[6] = 145
strArr[7] = 16
strArr[8] = 18
strArr[9] = 16
strArr[10] = 19

// for(let i = 0; i < strArr.length; i++){
//     console.log(strArr[1]);
// }
//
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for(let i = 0; i < 10; i++){
//     document.write(`<div>test </div>`)
//     console.log([i])
// }
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i++){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i += 2){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i = 0; i < 100; i += 2){
//     if( i % 2 ===0 && i !== 0 ){
//         console.log(i)
//         document.write(`${i}`)
// }
//}

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 0; i < 100; i += 2){
//     if( i % 2 === 1 && i !== 0 ){
//         console.log(i)
//         document.write(`${i}`)
//     }
// }