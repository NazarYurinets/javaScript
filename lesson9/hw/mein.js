// Все робити за допомоги js.
// - створити блок,
//
// let div = document.createElement("div")
// //     - додати йому класи wrap, collapse, alpha, beta
// div.classList.add("wrap")
// div.classList.add("collapse")
// div.classList.add("alpha")
// div.classList.add("beta")
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background = 'silver'
// div.style.color = 'green'
// div.style.fontSize = '40px'
// // - додати цей блок в body.
// document.body.appendChild(div)
// // - клонувати його повністю, та додати клон в body.
// document.body.appendChild(div.cloneNode(true))
// //
// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// let array = ['Main', 'Products', 'About us', 'Contacts']
// let divMenu = document.createElement("div")
// for (const item of array) {
//     let li = document.createElement("li")
//     li.innerText = item;
//     divMenu.appendChild(li)
//     document.body.appendChild(divMenu)
//
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// for(const products of coursesAndDurationArray){
//    let elements = document.createElement("div")
//     elements.innerText = `${products.title} ${products.monthDuration}`
//     document.body.appendChild(elements)
// }
// Завдання робити через цикли.
//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for(const product of coursesAndDurationArray){
    let div = document.createElement('div')
    div.setAttribute("class", "item")
    let h1Item = document.createElement('h1')
    h1Item.setAttribute("class",'description'  )
    h1Item.innerText = product.title

    let pItem = document.createElement('p')
    pItem.setAttribute("class",'description'  )
    pItem.innerText = product.monthDuration
    div.append(h1Item, pItem)
    document.body.appendChild(div)

}
