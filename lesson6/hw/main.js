// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let lengthStr = "hello world";
console.log(lengthStr.length);

let lengthStrOne = 'lorem ipsum';
console.log(lengthStrOne.length);

let lengthStrTwo = 'javascript is cool';
console.log(lengthStrTwo.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let toUppert = 'hello world';
console.log(toUppert.toUpperCase());

let toUpperCase = 'lorem ipsum';
console.log(toUpperCase.toUpperCase());

let toUpperCases = 'javascript is cool';
console.log(toUpperCases.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toLower = 'HELLO WORLD';
console.log(toLower.toLowerCase());

let toLowerCase = 'LOREM IPSUM';
console.log(toLowerCase.toLowerCase());

let toLowerCases = 'JAVASCRIPT IS COOL';
console.log(toLowerCases.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let trim =  ' dirty string   '
console.log(trim.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// function stringToArray(str){
//     return str.split(" ")
// }
// console.log(stringToArray(str));



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//     let str = 'Каждый охотник желает знать';
// let deletecharacters =(str, length) =>{
//     return str.substring(0, length)
// }
// console.log(deletecharacters(str, 7))
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str = "HTML JavaScript PHP";
const insert_dash = (str) =>{
    return str.replaceAll(" ","-").toUpperCase()
};
console.log(insert_dash(str));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let string = "hello"
function redister(string){
    return string[0].toUpperCase() +  string.slice(1)
}
console.log(redister(string));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
console.log(capitalize("hello world and people"));
