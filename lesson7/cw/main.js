// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model, producer, year, maxSpeed, volume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.model = volume;
    this.drive = () =>{
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
this.info = () =>{
    console.log(`модель - ${this.model}`, `виробник ${this.producer}`, `рік${this.year}` )
};
this.increaseMaxSpeed = (newSpeed) =>{
    this.maxSpeed = maxSpeed + newSpeed;
};
this.changeYear = (newValue) =>{
    this.year = newValue
};
this.addDriver = (driver) =>{
    this.drive = driver
};
}
let addCar = new Car('audi', 'Germany', 2010, 270, 2.0);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(60);
// addCar.drive();
// addCar.changeYear(2020)
// addCar.info();
// addCar.addDriver('Vasya')
// console.log(addCar);
// //
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars {
//     constructor(model, producer, year, maxSpeed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity
//     };
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометри на годину `);
//     };
//
//     info() {
//         console.log(`модель - ${this.model}`, `виробник ${this.producer}`, `рік${this.year}`)
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//
//     changeYear(newValue) {
//         this.year = newValue
//     };
//
//     addDriver(driver) {
//         this.drive = driver
//     };
// }
// let addCars = new Cars('audi', 'Germany', 2010, 270, 2.0);
// console.log(addCars);
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(60);
// addCar.drive();
// addCar.changeYear(2020)
// addCar.info();
// addCar.addDriver('Vasya')
// console.log(addCars);
//



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Popelushka {
//     constructor(name, age, size,) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     };
// }
//     let popelushka = [
//         new Popelushka('olha', 22, 40),
//         new Popelushka('olena', 20, 40),
//         new Popelushka('maria', 19, 40),
//         new Popelushka('nika', 23, 40),
//         new Popelushka('darina', 18, 40),
//         new Popelushka('yulia', 22, 36),
//         new Popelushka('britny', 22, 39),
//         new Popelushka('marine', 32, 38),
//         new Popelushka('katia', 24, 40),
//         new Popelushka('sakura', 17, 40)
// ];
// console.log(popelushka)
// class Prince {
//     constructor(name,age,shoe) {
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;
//     };
// }
//     let prince = new Prince("vasya", 22, 45)
//
// let found = (popelushka,prince) =>{
// for (let popelushkaElement of popelushka){
//     if (popelushkaElement.size === prince.shoe){
//         return `${popelushkaElement.name} повинна бути з тобою`
// }
// }
// };
// console.log(found(popelushka,prince));
//
//
// let popelushaFind = popelushka.find((item) => item.size === prince.shoe);
//
// console.log(popelushaFind);

