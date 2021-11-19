// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a, b, c) {
    if (a < b && a < c) {
        document.write(a)
    } else if (b < c && b < a) {
        document.write(b)
    } else
        document.write(c)

}

min(3, 1, 2);
document.write(`<br>NEXT TASK</br>`)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function man(a, b, c) {
    if (a > b && a > c) {
        document.write(a)
    } else if (b > c && b > a) {
        document.write(b)
    } else
        document.write(c)

}

man(3, 1, 2);
document.write(`<br>NEXT TASK</br>`)

// - створити функцію яка повертає найбільше число з масиву
let mas = [2, 8, 14, 6, 65, 19, 17, 7]

function maxmas(mas) {
    let m = mas[0];
    for (const i of mas) {
        if (i > m) {
            m = i;
        }
    }
    document.write(m)
}

maxmas(mas)
document.write(`<br>NEXT TASK</br>`)

// - створити функцію яка повертає найменьше число з масиву
function minmas(mas) {
    let m = mas[0];
    for (const i of mas) {
        if (i < m) {
            m = i;
        }
    }
    document.write(m)
}

minmas(mas)
document.write(`<br>NEXT TASK</br>`)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let smas = [2, 3, 10]

function summas(m) {
    let c = 0;
    for (let i in m) {
        c = c + m[i]
        // document.write(c +` `)
    }
    document.write(c)
    return c;
}

summas(smas)
document.write(`<br>NEXT TASK</br>`)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function medmas(m) {
    let c = 0;
    for (let i in m) {
        c = c + m[i]
        // document.write(c +` `)
    }
    c = c / m.length
    document.write(c)
}

medmas(smas)
document.write(`<br>NEXT TASK</br>`)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function meta(arr) {
    let max = arr[0];
    let min = arr[0];
    for (const i of arr) {
        if (i > max) {
            max = i;
        }
        if (i < min) {
            min = i
        }
    }
    document.write(max);
    return min;
}

meta(mas)
document.write(`<br>NEXT TASK</br>`)

// - створити функцію яка заповнює масив рандомними числами
let masc = [];

function randomdig(z) {
    for (let i = 0; i < 10; i++) {
        z[i] = Math.round(Math.random() * 100)
    }
}

randomdig(masc)
document.write(masc)
document.write(`<br>NEXT TASK</br>`)
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let masclim = [];

function randomdiglim(z, limit) {
    for (let i = 0; i < limit; i++) {
        z[i] = Math.round(Math.random() * 100)
    }
}

randomdiglim(masclim, 20)
document.write(masclim)
document.write(`<br>NEXT TASK</br>`)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let mascl = [];

function randomdigl(z, limd) {
    for (let i = 0; i < 10; i++) {
        z[i] = Math.round(Math.random() * limd)
    }
}

randomdigl(mascl, 3)
document.write(mascl)
document.write(`<br>NEXT TASK</br>`)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let digis = [1, 2, 3];

function reorder(m) {
    let newm = [];
    for (let i = m.length - 1; i >= 0; i--) {
        const mEl = m[i];
        newm.push(mEl);
    }
    document.write(newm)
    return newm;

}

reorder(digis)
document.write()
document.write(`<br>NEXT TASK</br>`)

//var2
digisv2 = [1, 2, 3];

function reverse(arr) {
    let newArr = [];
    for (let i = newArr.length - 1, ri = 0; i >= 0; i--, ri++) {
        // const newArrElement = newArr[i];
        newArr[ri] = newArr[i];
        document.write(newArr[i])
        document.write(newArr[ri])

    }
    document.write(newArr)
    document.write(`abc`)
    return newArr;
}

reverse(digisv2)
document.write()
document.write(`<br>NEXT TASK</br>`)