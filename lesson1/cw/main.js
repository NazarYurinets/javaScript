//(1) - Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
//
 let numb = [1, 5, 7, 72, 11, 5, 41, 71, 1, 10];
 let result = 0;
 let a = 0
//
 result = numb[0]+numb[1]+numb[2]+numb[3]+numb[4]+numb[5]+numb[6]+numb[7]+numb[8]+numb[9];

while (a<numb.length) {
    result+=numb[a]
    a+=1
 }

 for (a; a < numb.length; a++) {
     result += numb[a];
 }

 console.log(result);
//
//-----------------------------------------
// (2)
// Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

// let book1 = {
//     name: "Game of Thrones",
//     page: 374,
//     genre: "fantasy"
// };


//(3)Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори


//let book2 = {
//     name: "The Alchemist",
//     page: 145,
//     genre: "Quest",
//     authors: "Paulo Coelho"
//
// };





//. (4) Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

 let book1 = {
     name: "Game of Thrones",
     page: 374,
     genre: "fantasy"
 };

 let book2 = {
    name: "The Alchemist",
    page: 145,
     genre: "Quest",
     authors: "Paulo Coelho"
 };
 let books = [book1, book2]

 console.log(books[0])
 console.log(books[1])
//-----------------------------------------
// (5) - Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
 let height = 23;
 let width = 10;
 let s = (height*width)
console.log(s)

//-----------------------------------------
// (6) - Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.

 let heightC = 10;
 let dC = 4;
 let v = Math.PI * (dC / 2)**2 * heightC;
 console.log(v)

//-----------------------------------------
// (7) - У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
 let n = 3;
 let m = 4;
 let k = ((n**2)+(m**2))**0.5
 console.log(k)


