// ворити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// debugger;
let dig = 5
let word = `idle`
let bol = 5 > 7;

for (let i = 0; i < 5; i++) {
    document.write(`<div>${dig}</div>`);
}

for (let i = 0; i < 5; i++) {
    document.write(`<div>${word}</div>`);
}

for (let i = 0; i < 5; i++) {
    document.write(`<div>${bol}</div>`);
}
for (let i = 0; i < 5; i++) {
    console.log(`<div>${word}</div>`);
    console.log(`<div>${dig}</div>`);
    console.log(`<div>${bol}</div>`);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// debugger
let mas = []
for (let i = 0; i < 10; i++) {
    mas.push(Math.round(Math.random() * 10));

}
document.write(mas);
console.log(mas);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (i = 0; i < 10; i++) {
    document.write(`<div>Пляшка</div>`)
}

// debugger
for (i = 0; i < 10; i++) {
    document.write(`<div>${10 - i} Пляшкок стояло на столі, одна впала, залишилось ${9 - i}</div>`)
}

i = 0
while (i < 20) {
    document.write(`<h1>Бла бла бла</h1>`)
    i++
}

i = 0
while (i < 20) {
    document.write(`<h1> ${i + 1} Бла бла бла</h1>`)
    i++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let digArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let wordArr = [`Один`, `Два`, `Три`, `Четыре`, `Пять`, `Шесть`, `Семь`, `Восем`, `Девять`, `Десять`];
let mixArr = [1, `Two`, 3, `Four`, 5, `Six`, 7, `Eight`, 9, `Ten`];

i = 0
while (i < digArr.length) {
    let el = digArr[i];
    document.write(`${el}`);
    i++;
}

i = 0
while (i < wordArr.length) {
    el = wordArr[i];
    document.write(`${el}`);
    i++;
}

i = 0
while (i < mixArr.length) {
    el = mixArr[i];
    document.write(`${el}<br>`);
    i++;

}

let bolArr = [5 > 2, 2, 3 > 7, `Four`, 5 > 4, 6, 5 > 11, `Eight`, 5 > 1, 10];

let type = [`boolean`, `number`, `string`]
// i = 0
j = 0
while (j < type.length) {
    i = 0
    // document.write(`${type[j]}<br>`)
    document.write(`<br><br>`)
    while (i < bolArr.length) {
        el = bolArr[i];
        if (typeof el === `${type[j]}`) {
            // document.write(typeof el)
            document.write(`${el}<br>`);
        } else {
            // document.write(`${el}<br>`);
        }

        i++;
    }
    j++
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

let empty = []
i = 0
while (i < bolArr.length) {
    // document.write(`${bolArr[i]}`)
    empty.push(`${bolArr[i]}`)
    i++

}
document.write(empty)

for (i = 0; i < 10; i++) {
    document.write(`<br> Крок номер ${i + 1} <br>`)
    console.log(`Крок номер ${i + 1}`)
}

for (i = 0; i < 100; i++) {
    document.write(`<br> Крок номер ${i + 1} <br>`)
    console.log(`Крок номер ${i + 1}`)
}

for (i = 0; i < 100; i = i + 2) {
    document.write(`<br> Крок номер ${i} <br>`)
    console.log(`Крок номер ${i}`)
}

for (i = 0; i < 100; i++) {
    if (i % 2 === 0){
        document.write(`<br> Крок номер ${i} <br>`)
        console.log(`Крок номер ${i}`)
    } else {

    }

}

for (i = 0; i < 100; i++) {
    if (i % 2 !== 0){
        document.write(`<br> Крок номер ${i} <br>`)
        console.log(`Крок номер ${i}`)
    } else {

    }

}