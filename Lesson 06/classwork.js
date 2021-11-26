// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

namer = (name) => {
    let validname = name.replace(/[^a-zа-яё0-9\s]/gi, ' ');
    // console.log(rep)
    //
    return validname
}

document.write(namer(n3));
document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

arraygen = (n) => {
    let arr = []
    for (i = 0; i < n; i++) {
        rdig = Math.round(Math.random() * 100)
        arr.push(rdig)
    }
    return arr
}

sorter = (arr) => {
    return arr.sort((a, b) => a - b)

}
// arraygen(20)

pairfilter = (arr) => {
    let pair = []
    arr.filter(value => {
        if (value % 2 === 0) {
            pair.push(value)
        }
    })
    document.write(arr)
    document.write(`<br>`)
    return pair
}

tostring = (arr) => {
    let str = arr.map(digit => digit).join(` `)
    document.write(typeof str);
    document.write(`<br>`)
    return str
}


document.write(arraygen(20))
document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)

document.write(sorter(arraygen(10)));

document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)

document.write(pairfilter(arraygen(10)));

document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)

document.write(tostring(arraygen(10)));
document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11, 21, 3];
sortNums = (arr, direction) => {
    if (direction === `+`) {
        return arr.sort((a, b) => a - b)
    } else if (direction === `-`) {
        return arr.sort((a, b) => b - a)
    }
}


document.write(sortNums(nums, `-`));
document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 1},
    {title: 'QA Complex', monthDuration: 2},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

arrsort = (arr) => {
    resultarr = arr.sort((a, b) => a.monthDuration - b.monthDuration);
    // console.log(resultarr)
    return resultarr;
}

arrsortfive = (arr) => {
    let newarray = []
    // filtarr = arr.sort((a, b) => a.monthDuration - b.monthDuration)
    let filtarr = arr.filter(value => {
        if (value.monthDuration > 5) {
            newarray.push(value)
        }
    })
    // document.write(newarray)
    // console.log(newarray)
    return newarray
}

console.log(arrsort(coursesAndDurationArray))
arrsort(coursesAndDurationArray)
document.write(arrsort(coursesAndDurationArray));

document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)

console.log(arrsortfive(coursesAndDurationArray));
document.write(arrsortfive(coursesAndDurationArray));