// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом


let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
i = 0
while (i < mass.length) {
    document.write(`${mass[i]}, `);
    i++
}

document.write(`<br>`)

for (let i = 0; i < mass.length; i++) {
    document.write(`${mass[i]}, `);
}
document.write(`<br>`)

i = 0
while (i < mass.length) {
    if (i % 2 !== 0) {
        document.write(`${mass[i]}, `);
    } else {

    }
    i++
}

document.write(`<br>`)

for (let i = 0; i < mass.length; i++) {
    if (i % 2 === 0) {
        document.write(`${mass[i]}, `);
    } else {

    }
}


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

document.write(`<br>`)
i = 0
while (i < mass.length) {
    if (mass[i] % 2 === 0) {
        document.write(`${mass[i]}, `);
    } else {

    }
    i++
}

document.write(`<br>`)

for (let i = 0; i < mass.length -1; i++) {
    if (mass[i] % 2 === 0) {
        document.write(`${mass[i]}, `);
    }
}
document.write(`<br>`)

// // 7. замінити кожне число кратне 3 на слово "okten"
// for (i = 0; i < mass.length; i++) {
//     if (mass[i] % 3 === 0) {
//         document.write(`okten <br>`);
//     }
// }
// document.write(`<br>`)
//
// for (i = mass.length; i > 0; i--) {
//     if (mass[i] % 3 === 0) {
//         document.write(`okten <br>`);
//     }
// }
// document.write(`<br>`)
//
// // 8. вивести масив в зворотньому порядку.
// document.write(`<br>`)
// i = mass.length - 1
// while (i > 0) {
//     document.write(`${mass[i]}, `);
//     i--
// }
