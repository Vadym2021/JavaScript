// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function konc(a, b) {
    let k = '';
    for (let i = 0; i < arguments.length; i++) {
        k = k + arguments[i]
    }
    document.write(k)
}

konc(`one`,)
document.write(`<br>NEXT TASK </br>`)
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
//     [3,5,7,9]
mas01 = [1, 2, 3, 4]
mas02 = [2, 3, 4, 5]


function masplus(m1, m2) {

    let mas03 = []
    for (let i = 0; i < m1.length; i++) {
        // k = m1[i] + m2[i]
        mas03.push(m1[i] + m2[i])
        // document.write(k)
        // document.write(`<br>NEXT TASK </br>`)

    }
    document.write(mas03)
}

masplus(mas01, mas02)
document.write(`<br>NEXT TASK </br>`)
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let example = [{name: 'Dima', age: 13}, {model: 'Camry'}]

function keymaper(m) {
    let newmass = [];
    for (let i of m) {
        for (let k in i){
            console.log(k)
            newmass.push(k)
            // document.write(newmass)
        }


    }
    document.write(newmass)
}

keymaper(example)
document.write(`<br>NEXT TASK </br>`)

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function namemaper(m) {
    let xmass = [];
    for (let i of m) {
        for (let k in i){
            console.log(i[k])
            xmass.push(i[k])
            // document.write(xmass)
        }


    }
    document.write(xmass)
}

namemaper(example)
