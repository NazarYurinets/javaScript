//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//
//     1. перебрати його циклом while
// let arrNumber = [2,17,13,6,22,31,45,66,100,-18]
// for (let i = 0; i < arrNumber.length; i++){
//     console.log(arrNumber[i])
// }

// //     2. перебрати його циклом for
// let arrNumber = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arrNumber.length){
//     console.log(arrNumber[i])
//     i++
// }
// Зворотньому циклі
//let arrNumber = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arrNumber.length){
//     console.log(arrNumber[i])
//     i++
// }


// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrNumberOdd = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arrNumberOdd.length) {
//     if (i % 2 !== 0) {
//         console.log(arrNumberOdd[i])
//
//     }
//     i++
// }
// в зворотньму
// let arrNumberOdd = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arrNumberOdd.length) {
//     if (i % 2 !== 0) {
//         console.log(arrNumberOdd[i])
//
//     }
//     i--
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//let arrNumberOdd = [2,17,13,6,22,31,45,66,100,-18];
//for (let i = 0; i < arrayNumbers.length; i++){
//     if ( i% 2 !== 0){
//         console.log(arrayNumbers[i]);
//     }
// }
// в зворотньму
// let arrNumberOdd = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrNumberOdd.length; i--){
//     if (i % 2 !== 0){
//         console.log(arrNumberOdd[i])
// }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let evenNumbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < evenNumbers.length){
//     if (i % 2 === 0){
//     console.log(evenNumbers[i])
// }
//     i++
// }
//let evenNumbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < evenNumbers.length){
//     if (i % 2 === 0){
//     console.log(evenNumbers[i])
// }
//     i--
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// // }
// В зворотньому
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
//

// // 7. замінити кожне число кратне 3 на слово "okten"
// let evenNumberArr = [2,17,13,6,22,31,45,66,100,-18];
// for (let xxx of evenNumberArr){
//     if (xxx % 3 === 0){
//         xxx = "okten";
//     console.log(xxx);
// }
// }
// В зворотньому
// for (let i = evenNumberArr.length-1; i > 0; i--) {
//     if (evenNumberArr[i] % 3 === 0) {
//         evenNumberArr[i] = "okten";
//     }
// }

// 8. вивести масив в зворотньому порядку.
// let evenNumberArr = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i < evenNumberArr.length; i--){
//
//     if( i % 3 === 0){
//         evenNumberArr = "okten"
//         console.log(evenNumberArr[i])
//     }
// }
//
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)








//
// 	// Використовуючи данні з масиву, за допомоги document.write та циклу
// 	// 		побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
// 	// 		Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
// 	// 	    Шаблон застосувати до кожного об'єкта в масиві
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// 2.1
// for (let i = 0; i < simpsons.length; i++) {
//     document.write(`<div">
//         ${simpsons[i].name}
//         ${simpsons[i].surname}
//         ${simpsons[i].age}
//         ${simpsons[i].info}
//         <img src="${simpsons[i].photo}" alt="">
// </div>`);
// }
//
// 2.2
// for (let i = 0; i < simpsons.length; i++) {
//     document.write(`<div style="margin-bottom: 20px;"`)
//     document.write(`<h2">${simpsons[i].name} ${simpsons[i].surname}. Age is ${simpsons[i].age}</h2>`)
//     document.write(`<p>${simpsons[i].info}</p>`)
//     document.write(`<img src="${simpsons[i].photo}" alt="">`)
//     document.write(`</div>`)
// }
//
// // Використовуючи данні з масиву, за допомоги document.write та циклу
// //             побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
// //             Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// document.write(`<div class="row">`)
// for (let i = 0; i < products.length; i++) {
//     document.write(`
//     <div class="product-card">
//         <h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3>
//         <img src="${products[i].image}" alt="" class="product-image">
//     </div>
// `)
// }
// document.write(`</div>`)
