//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt("Enter a number from 0 to 59")
// if (time <= 15) {
//    console.log("the first quarter")
// }
// else if(time <= 30) {
//    console.log("the second quarter")
// }
// else if (time <= 45) {
//    console.log( "third quarter")
// }
// else if (time <= 60) {
//    console.log( "fourth quarter")
// }else {
//    console.log("wrong time")
// }

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt("enter the date from 1 to 31")
// if (day <= 10) {
//     console.log("1 half of the month")
// }
// else if (day <= 20) {
//    console.log("2 half of the month")
// }
// else if (day <= 31) {
//     console.log("3 half of the month")
// }
//У нас є змінна test яка дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
 let test = "123"
 if (test === true) {
   console.log("True")
 }
 else {
     console.log("False")
}
(test === true) ? console.log('True') : console.log('False')

//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
 let a = -3;

 switch (a) {
    case 0:
        console.log("False")
         break
    default:
        console.log("True");
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let day = +prompt ("Введіть порядковий номер дня:")

switch (day){
    case 1:
console.log("Душ, зарядка, робота");
        break;
    case 2:
        console.log("Басейн, робота");
        break;
    case 3:
        console.log("Пари, робота");
        break;
    case 4:
        console.log("Басейн, пари");
        break;
    case 5:
        console.log("Паб, пивко");
        break;
    case 6:
        console.log("банька");
        break;
    case 7:
        console.log("Футбол, відпочинок");
        break;
    default:
        console.log("Неправильно вказаний день");
}
// Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
let year = +prompt("Введіть рік: ")

 if (year % 4 === 0) {
     console.log("Рік Високосний")
 } else {
     console.log("Рік не Високосний")
 }

//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
 let name = prompt("Яка «офіційна» назва JavaScript?")

if (name === "ECMAScript") {
     console.log("Правильно!");
} else {
     console.log("Не знаєте? ECMAScript!");
 }



