// - Дано натуральное число n. Выведите все числа от 1 до n.
let upton = (n) => {
    for (let i = 0; i < n; i++) {
        document.write(i)
    }
}
upton(5)

document.write(`<br>NEXT TASK </br>`)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.


let abprinter = (a, b) => {
    if (a < b) {
        document.write(a)
        a++
        abprinter(a, b)
    } else if (a > b) {
        document.write(a)
        a--
        abprinter(a, b)
    } else {
        document.write(a)
    }
}

abprinter(5, 1)
document.write(`<br>NEXT TASK </br>`)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let iplusone = (arr, i) => {
    let el = arr[i]
    let eltwo = arr[i + 1]
    arr[i] = eltwo;
    arr[i + 1] = el;
    document.write(arr)
}

iplusone([8, 9, 0, 4], 0)
document.write(`<br>NEXT TASK </br>`)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
let arrzeroend = (...m) => {
    let zeroarr = [];
    let zeroless = [];

    for (let i of m) {
        if (i === 0) {
            zeroarr.push(i);
        } else {
            zeroless.push(i)
        }
    }

    for (const zero of zeroarr) {
        zeroless.push(zero)
    }

    // console.log(...zeroless)
    // console.log([...zeroless])
    // let resultarr = ...zeroless
    // let resultarr = [...zeroless, 'ghgh', ...zeroarr]
    // document.write(resultarr)
    // console.log(zeroless)
    document.write(zeroless)
}

arrzeroend(0, 0, 0, 5, 5, 9, 0, 2, 0, 0, 1, 0, 3, 2, 0, 5)
document.write(`<br>NEXT TASK </br>`)

// let arrzeroendtwo = (...m) => {
//     debugger
//     for (let i of m) {
//         if (m[i] === 0) {
//             m[i] = m[i + 1];
//             m[i + 1] = 0;
//             document.write(m[i])
//             // m[i + 1] = 0;
//             // document.write(i)
//         } else if (){
//             arrzeroendtwo(m)
//         }
//     }
//
//     document.write(`<br>NEXT TASK </br>`)
//     document.write(m)
// }
//
//
// arrzeroendtwo(1, 5, 0, 2, 1)
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]