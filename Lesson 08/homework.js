// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
console.log(document)

let elid = document.getElementById(`content`);
console.log(elid)

// -- отримує текст з блоку з id "rules"

let Rulesel = document.getElementById(`rules`);
console.log(Rulesel)
// -- замініть текст параграфа з id 'content' на будь-який інший
elid.innerText = 'Of all the things i lost i miss my mind the most'
// -- замініть текст параграфа з id 'rules' на будь-який інший
Rulesel.innerText = 'hjgghjghjghjhgjghjghjhg'

// -- змініть кожному елементу колір фону на червоний
let allEl = document.children;
console.log(allEl)

for (const item of allEl) {
    item.style.backgroundColor = `red`;
}
// document.body.style.backgroundColor = 'red'
// -- змініть кожному елементу колір тексту на синій
for (const item of allEl) {
    item.style.color = `blue`;
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(Rulesel.className)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let RulesClass = document.getElementsByClassName(`fc_rules`);


for (const item of RulesClass) {
    item.style.color = `white`;
}



