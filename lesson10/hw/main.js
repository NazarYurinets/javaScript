// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


let press = document.getElementById('text')
let button = document.getElementById('button')
button.onclick = function (){
    press.style.display = 'none'
}
document.getElementById('button1').onclick = function () {
    document.getElementById('button1').hidden = true;
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('button2').onclick = function () {
    let age = document.getElementById('age').value;
    if (age <= 18) {
        alert("Вам не є 18");
    } else if (age >=  18) {
        alert('Вітаю');
    }
}



// - Создайте меню, которое раскрывается/сворачивается при клике
let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let array = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
];

let divFather = document.createElement('div');
for (let item of array) {
    let divItem = document.createElement('div');
    item.button = 'Click me'

    let title = document.createElement('div')
    title.innerText = item.title;

    let body = document.createElement('div')
    body.innerText = item.body;

    let button = document.createElement('button')
    button.innerText = item.button

    button.onclick = function () {
        button.classList.toggle('hidden')
    };

    divItem.append(title, body, button);
    divFather.appendChild(divItem)

}
document.body.appendChild(divFather)