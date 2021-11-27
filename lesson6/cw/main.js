// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//  let n1 = 'Harry..Potter'
//  let n2 = 'Ron---Whisley'
//  let n3 = 'Hermione__Granger'
// function normalName(name){
//     return  name
//         .replaceAll("..", " ")
//         .replaceAll("__", " ")
//         .replaceAll("---", " ")
//
// }
// console.log(...[n1,n2,n3].map(normalName));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
 let randomArr = (size) => {
     let arr = [];
     for (let i = 0; i < size; i++) {
        arr.push(Math.round(Math.random() * size)) ;

     }
     return arr;

 };


console.log(randomArr( 100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sortNumber = (length, num) =>{
    let numberArr = [];
    for(let i = 0; i < length; i++){
        numberArr.push(Math.round(Math.random() * num));
    }
    return numberArr.sort((a,b) => a - b )
}
console.log(sortNumber(10,100))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filterNumber = sortNumber(20,20);
filterNumber.filter(word => word.length % 2 === 0);
console.log(filterNumber);

let filterNum = (length, num) =>{
    let numArray = [];
    for (let i = 0; i < length; i++){
       numArray.push(Math.floor(Math.random() * num));
    }
    return numArray.filter(number => number.length % 2 === 0);
};
console.log(filterNum(10,100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let callbackNum = sortNumber(20,20)
callbackNum.map(value => value.toString());
console.log(callbackNum)



let arrayNum = (length, num) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random() * num));
    }
    return array.map(value => value.toString());
};
console.log(arrayNum(10, 100))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
 function sortNums(num, direction) {
     let sortArr = [];
     if (direction ==="wqe"){
         sortArr = num.sort((a,b) => a - b);
     } else if (direction === "wqee"){
        sortArr = num.sort((a,b) => b - a);
     }
     return sortArr;
 }
 console.log(sortNums([11,21,3], "wqe"));


// - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
 ];
// -- відсортувати його за спаданням за monthDuration
let coursesSort = coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration);
console.log(coursesSort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesFilter = coursesAndDurationArray.filter(courses => courses.monthDuration > 5);
console.log(coursesFilter);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(str, n){
     let subArr = [];
     while (str.length) {
         subArr.push(str.substr(0, n))
        str = str.slice(n);
    }

     return subArr;
 }
console.log(cutString('насолода', 3));

