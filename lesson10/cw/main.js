// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
document.getElementById("button").onclick = function (){
    let input1 = document.form1.input1.value
    let input11 = document.form1.input1.value
    let input2 = document.form1.input1.value
    let input22 = document.form1.input1.value

console.log(input1,input11,input2,input22 )
}


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let btn1 = document.createElement('button');
let div1 = document.createElement('div');
btn1.innerText = 'create';

document.body.append(input1, input2, input3, btn1, div1);


btn1.onclick = () => {
    let tr = input1.value;
    let th = input2.value;
    let text = input3.value;
    function table(tr, th, text) {
        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            for (let a = 0; a < th; a++) {
                let th = document.createElement('th');
                th.innerText = `${text}`;
                div1.appendChild(tr);
                tr.appendChild(th);
            }}}
    table(tr, th, text);
}
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


let arrayBed = ['дурачок', 'чіпуха','нечема']

let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'check'

btn.onclick = () => {
    let arrInput = input.value.split(' ')
    for (const arrEl of arrayBed) {
        for (const string of arrInput) {
            if (arrEl === string){
                alert('нецензурне слово')}
        }
    }
    input.value = '';
}
document.body.append(input, btn)