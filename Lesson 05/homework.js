// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let square = (a, b) => a * b;
console.log(square(2, 2))

// - створити функцію яка обчислює та повертає площу кола
let radius = (r) => 3.14 * (r ** 2);
console.log(radius(3))

// - створити функцію яка обчислює та повертає площу циліндру
let ploshacil = (r, h) => 2 * 3.14 * r * h;
console.log(ploshacil(3, 3))

// - створити функцію яка приймає масив та виводить кожен його елемент
let massive = (m) => {
    for (i = 0; i < m.length; i++) {
        document.write(m[i])
        // console.log(m[i])
    }
}

massive([1, 2, 3]);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let par = (t) => document.write(`<p>` + t + `</p>`)

par(`Lorem ipsum dolor.`)
document.write(`<br>NEXT TASK<br>`)
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let li = (t) => {
    document.write(`<ul>`);
    document.write(`<li>` + t + `</li>`)
    document.write(`<li>` + t + `</li>`)
    document.write(`<li>` + t + `</li>`)
    document.write(`</ul>`)
}

li(`fgh`)
document.write(`<br>NEXT TASK<br>`)
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let litext = (t, n) => {
    document.write(`<ul>`)
    for (i = 0; i < n; i++) {
        document.write(`<li>` + t + `</li>`)
    }
    document.write(`</ul>`)
}


litext(`Lorem`, 4)
document.write(`<br>NEXT TASK<br>`)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let maccept = (m) => {
    document.write(`<ul>`)
    for (i in m) {
        document.write(`<li>` + m[i] + `</li>`)
    }
    document.write(`</ul>`)
}

maccept([`true`, 3, `word`, 12, `false`, `game`, 4, `true`]);
document.write(`<br>NEXT TASK<br>`)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let maccepttwo = (m) => {
    document.write(`<div>`)
    for (i of m) {
        document.write(i.id)
        document.write(i.name)
        document.write(i.age)
        console.log(i)
    }
    document.write(`</div>`)
}
maccepttwo([
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
]);
document.write(`<br>NEXT TASK<br>`)