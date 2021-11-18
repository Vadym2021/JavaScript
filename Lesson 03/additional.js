// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let mas = [];
let i = 0;
// debugger
for (i = 0; i < 50;) {
    dig = Math.floor(Math.random() * 40)
    // document.write(dig + `, `)
    if (dig % 2 === 0) {
        mas.push(dig)
        i++
    } else {
        i = i;

    }
}
document.write(mas)

document.write(`<br>`)

let mastwo = [];
i = 0;
// debugger
for (i = 0; i < 50;) {
    dig = Math.floor(Math.random() * 40)
    // document.write(dig + `, `)
    if (dig % 2 !== 0) {
        mastwo.push(dig)
        i++
    } else {
        i = i;

    }
}
document.write(mastwo)

document.write(`<br>`)

let masthree = [];
i = 0;
// debugger
for (i = 0; i < 20; i++) {
    dig = Math.floor(Math.random() * 40)
    // document.write(dig + `, `)
    masthree.push(dig)
}

document.write(masthree)

document.write(`<br>`)

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let masfour = [];
i = 0;
// debugger
for (i = 0; i < 20; i++) {
    dig = 8 + Math.floor(Math.random() * 724)
    // document.write(dig + `, `)
    masfour.push(dig)
}

document.write(masfour)

document.write(`<br>`)

// 2. Вивести за допомогою console.log кожен третій елемен
for (i = 2; i < masfour.length; i += 3) {
    console.log(`${masfour[i]}`)
}

console.log(`Next task`)

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (i = 2; i < masfour.length; i += 3) {
    if (`${masfour[i]}` % 2 === 0) {
        console.log(`${masfour[i]}`)
    } else {

    }
}
console.log(`Next task`)
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newmas = []
for (i = 2; i < masfour.length; i += 3) {
    if (`${masfour[i]}` % 2 === 0) {
        console.log(`${masfour[i]}`)
        newmas.push(`${masfour[i]}`)
    } else {

    }
}
console.log(newmas)
console.log(`Next task`)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (i = 0; i < masfour.length; i++) {
    if (`${masfour[i + 1]}` % 2 === 0) {
        console.log(`${masfour[i]}`)
    } else {

    }
}
console.log(`Next task`)
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let check = [100, 250, 50, 168, 120, 345, 188];
// check = check.map(Number)
let checkqty = check.length;
let checksum = 0;
let temp = 0;
// document.write(typeof checksum)
for (i = 0; i < check.length; i++) {
    temp = `${check[i]}`;
    // parseInt=($check[i])
    temp = parseInt(temp)
    // document.write(typeof temp)
    checksum = checksum + temp;
    // document.write(checksum + `,`)
}
document.write(checksum)
document.write(`<br>`)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randommas = [];
let randommasplus = [];
i = 0;
// debugger
for (i = 0; i < 10; i++) {
    dig = Math.floor(Math.random() * 40)
    // document.write(dig + `, `)
    randommas.push(dig)
}
document.write(randommas)
document.write(`<br>`)

for (i = 0; i < randommas.length; i++) {
    temp = `${randommas[i]}`;
    // document.write(`${randommas[i]}`)
    // document.write(temp + `,`)
    // parseInt=($check[i])
    temp = parseInt(temp)
    temp = temp * 5;
    randommasplus.push(temp)
}

document.write(`<br>`)
document.write(randommasplus)
document.write(`<br>`)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let type = 0;
let line = ['hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false]
let newline = [];
// let z = typeof (line[4])
let linekey = 0;
// document.write(z)
// for (i = 0; i < line.length; i++) {
//     z = typeof(`${line[i]}`);
//
//     document.write(typeof `${line[i]}`)
//     document.write(`<br>`)
//     document.write(typeof z)
//
// }
for (const lineKey in line) {
    // document.write(line[lineKey])
    // document.write(typeof line[lineKey])
    // document.write(`<br>`)
    type = typeof (line[lineKey]);
    if (type === `number`) {
        newline.push(line[lineKey])
    } else {

    }
}
document.write(`<br>`)
document.write(newline)
document.write(`<br>`)

//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

document.write(`<br>`)
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// document.write(usersWithId)
// document.write(`<br>`)
// document.write(citiesWithId)
// document.write(`<br>`)
let usersWithCities = []

// for (i = 0; i < usersWithId.length; i++) {
//     let user = usersWithId[i];
//     // document.write(`user`)
//     document.write(`${user.id}`);
//     for (k = 0; k < citiesWithId; i++) {
//         let city = citiesWithId[k];
//         if (city.user_id === user.id) {
//             usersWithCities.push(`${user.id}, ${user.name}, ${user.age}`)
//             document.write(usersWithCities)
//         }
//     }
// }
// document.write(usersWithCities)
// debugger
// let adress = [];

for (const user of usersWithId) {
    for (const key in user) {
        // console.log(key, user[key])
        for (const adress of citiesWithId) {
            // for (const key in userc) {
            // console.log(key, user[key])
            // adress.push(key, userc[key])
            if (adress.user_id === user.id) {
                user.mail = adress;
                // document.write(`BINGO`);
                // document.write(`<br>`);
                // usersWithCities.push(user)

            } else {

                // }
            }

        }
        // usersWithCities.push(user)
    }
    usersWithCities.push(user)
}

// for (const userc of citiesWithId) {
//     for (const key in userc) {
//         // console.log(key, user[key])
//         adress.push(key, userc[key])
//     }
// }
console.log(usersWithCities)


//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log(`Next task`)

let dmass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (d in dmass) {
    if (d % 2 === 0) {
        console.log(d)
    }
}
console.log(`Next task`)
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let dmasstwo = [];
dmass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (d in dmass) {
    dmasstwo.push(dmass[d]);
}

console.log(dmasstwo)
console.log(`Next task`)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = ['a', 'b', 'c'];
let plus = [];
for (a in abc) {
    plus = plus + abc[a];
    // console.log(plus)
}
console.log(plus)
console.log(`Next task`)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
plus = [];
i = 0;
while (i < abc.length) {
    plus = plus + `${abc[i]}`;

    // console.log(`${abc[i]}`)
    i++
}
console.log(plus)
console.log(`Next task`)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

plus = [];
for (a of abc) {
    plus = plus + a;
    // console.log(a)
}
console.log(plus)
console.log(`Next task`)