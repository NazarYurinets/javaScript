// // -створити форму з інпутами для name та age.
// //     При відправці форми записати об'єкт в localstorage
// let name = document.forms.userForm.name;
// let age = document.forms.userForm.age;
// let btn = document.getElementsByTagName('btn');
// let key = 'key';
//
// let save = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     };
//     localStorage.setItem(key, JSON.stringify(user));
// };
//
// btn.onclick = () => {
//     save(name.value, age.value);
// }
//
// // -створити форму з інпутами для model,type та volume автівки.
// //     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let model = document.form.model;
let type = document.form.type;
let volume = document.form.volume;
let btn = document.getElementById('btn');
let item = 'key';

let save = (modelCar, typeCar, volumeCar) => {
    let arr = JSON.parse(localStorage.getItem(item)) || [];

    let user = {
        model: modelCar,
        type: typeCar,
        volume:volumeCar
    }

    arr.push(user);
    localStorage.setItem(item, JSON.stringify(arr));

};

btn.onclick = () => {
    save(model.value, type.value, volume.value);
}