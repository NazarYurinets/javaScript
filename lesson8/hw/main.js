
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :


// -- отримує текст з параграфа з id "content"
let contentId =  document.getElementById("content");
console.log(contentId.innerText);

// -- отримує текст з блоку з id "rules"
let rulesId =  document.getElementById("rules");
console.log(rulesId.innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
let contentCh = document.getElementById("content");
console.log(contentCh.innerText = "ідключіть до нього скрипт");
// -- замініть текст параграфа з id 'rules' на будь-який інший
let rules = document.getElementById("rules");
rules.innerText = "grgdgfdgt";

// -- змініть кожному елементу колір фону на червоний
let children = document.body.children;
for(const child of children){
    child.style.background = "red";
}

// -- змініть кожному елементу колір тексту на синій
let childrenElement = document.body.children;
for (const child of childrenElement){
    child.style.color = "blue"
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let element = document.getElementById("rules")
console.log(element.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let  fc_rules = document.getElementsByClassName(" fc_rules")
for(const fcRules of fc_rules){
    fcRules.style.color = "red"
}
