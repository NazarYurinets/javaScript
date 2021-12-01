//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

//
function User(id, name, surname, email, phone) {
    this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [
//     new User(3, "vasya", "baklajan", "hjhqwe@qwef","+3805767667"),
//     new User(1, "pavlo", "pnh", "hjgqwe@qwef","+3805767667"),
//     new User(2, "petro", "baranow", "klkqwe@qwesdf","+380573312667"),
//     new User(10, "sasha", "baran234ow", "qsdfwe@qwef","+2232767667"),
//     new User(4, "nazar", "barasddfnow", "qsdfwe@qwef","+3805767667"),
//     new User(8, "anton", "baranow", "qwebvb@qwef","+3805767667"),
//     new User(9, "stepan", "yurynets", "qvwe@qwef","+3805767667"),
//     new User(7, "ivan", "baranow12", "qwnbe@qwef","+3805767667"),
//     new User(5, "jon", "stepanov", "nmqwe@qwef","+3805767667"),
//     new User(6, "li", "urumaky", "mlkjlwe@qwef","+3805767667")
// ];
// console.log(users)
//
//
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filterUsers = users.filter((item) =>{
//     if (item.id % 2 ===0){
//         return item;
//     }});
// console.log(filterUsers);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userSort = users.sort((a, b) => a.id - b.id)
// console.log(userSort)
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// // створити пустий масив, наповнити його 10 об'єктами Client
// let arrClient = [
//     new Client(3, "vasya", "baklajan", "hjhqwe@qwef","+3805767667",["laptop", "vacuum", "cleaner", "freezer"]),
//     new Client(1, "pavlo", "pnh", "hjgqwe@qwef","+3805767667",["pc", "vacuum", "cleaner", "freezer"]),
//     new Client(2, "petro", "baranow", "klkqwe@qwesdf","+380573312667",["cd", "vacuum"]),
//     new Client(10, "sasha", "baran234ow", "qsdfwe@qwef","+2232767667",["sdfdg", "vacuum", "cleaner", "freezer"]),
//     new Client(4, "nazar", "barasddfnow", "qsdfwe@qwef","+3805767667",["sofa", "cleaner", "freezer"]),
//     new Client(8, "anton", "baranow", "qwebvb@qwef","+3805767667",["apple", "vacuum", "cleaner", "freezer"]),
//     new Client(9, "stepan", "yurynets", "qvwe@qwef","+3805767667",["banana", "vacuum",  "freezer"]),
//     new Client(7, "ivan", "baranow12", "qwnbe@qwef","+3805767667",["laptop", "vacuum", "cleaner", "freezer","vacuum", "cleaner", "freezer"]),
//     new Client(5, "jon", "stepanov", "nmqwe@qwef","+3805767667",["laptop"]),
//     new Client(6, "li", "urumaky", "mlkjlwe@qwef","+3805767667",["laptop", "vacuum", "cleaner", "freezer","weet"])
//
// ]
// console.log(arrClient)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let clientSort =  arrClient.sort((a, b) => a.order.length - b.order.length)
// console.log(clientSort);