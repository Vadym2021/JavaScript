// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function plosha(a, b) {
    let square = 0;
    square = a * b;
    document.write(square)

}

plosha(2, 2)
document.write(`<br>NEXT TASK<br>`)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radius(r) {
    let rad = 0;
    rad = 3.14 * (r ** 2);
    document.write(rad)
}

radius(3)
document.write(`<br>NEXT TASK<br>`)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function ploshacil(r, h) {
    let sqcil = 0;
    sqcil = 2 * 3.14 * r * h;
    document.write(sqcil)

}

ploshacil(2, 2)
document.write(`<br>NEXT TASK<br>`)
// - створити функцію яка приймає масив та виводить кожен його елемент
let mas = [1, 2, 3, 4, 5];

function massive(m) {
    for (i = 0; i < m.length; i++)
        document.write(m[i])

}

massive(mas)
document.write(`<br>NEXT TASK<br>`)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function par(t) {
    document.write(`<p>` + t + `</p>`)
}

t = `Lorem ipsum dolor.`
par(`Lorem ipsum dolor.`)
document.write(`<br>NEXT TASK<br>`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function li(t) {
    document.write(`<ul>`)
    document.write(`<li>` + t + `</li>`)
    document.write(`<li>` + t + `</li>`)
    document.write(`<li>` + t + `</li>`)
    document.write(`</ul>`)
}

t = `Lorem ipsum dolor.`
li(`Lorem`)
document.write(`<br>NEXT TASK<br>`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function litext(t, n) {
    document.write(`<ul>`)
    for (i = 0; i < n; i++) {
        document.write(`<li>` + t + `</li>`)
    }
    document.write(`</ul>`)
}

t = `Lorem ipsum dolor.`
litext(`Lorem`, 4)
document.write(`<br>NEXT TASK<br>`)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let masi = [`true`, 3, `word`, 12, `false`, `game`, 4, `true`]

function maccept(m) {
    document.write(`<ul>`)
    for (i in m) {
        document.write(`<li>` + m[i] + `</li>`)
    }
    document.write(`</ul>`)
}

maccept(masi);
document.write(`<br>NEXT TASK<br>`)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
];

function maccepttwo(m) {
    document.write(`<div>`)
for (i of m){
    document.write(i)
    console.log(i)
}
    document.write(`</div>`)
}
maccepttwo(usersWithId);
document.write(`<br>NEXT TASK<br>`)