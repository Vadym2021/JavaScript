// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com


const evalid = (mail) => {
    let bool = mail.includes(`@`)
    if (!bool) {
        return console.log(`В ${mail} выжсутныя @`)
    }

    let beforedog = mail.split(`@`)
    if (beforedog[0].length < 1) {
        console.log(`${mail} занадто короткий`)
    }


    let postfix = beforedog[1].split('.')[0]
    if (postfix.length < 2) {
        console.log(`${mail} postfix занадто короткий`)
    }

}

evalid(`someemailgmail.com`)
evalid(`@lgmail.com`)
evalid(`some@i.ua`)

// evalid = (mail) => {
//     let arr = mail.split(``).some((item) => item === '@');
//     // console.log(arr)
//     if (arr === true) {
//         let point = mail.split(``).some((item) => item === '.');
//         if (point === true) {
//             document.write(mail + ` is valid`)
//         } else {
//             document.write(mail + ` is not valid`)
//         }
//     } else {
//         document.write(mail + ` is not valid`)
//     }
//
// }
//
// mail = `someemai@lgmail.com`
// evalid(mail)
//
// document.write(`<br>`)
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масивlet
document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)
coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// module = (arr) => {
//    let h = arr.sort((a,b)=>{
//        return a.modules.length-b.modules.length
//    })
//     return h
// }
//
// console.log(module(coursesArray));

module = (arr) => arr.sort((a, b) => a.modules.length - b.modules.length);

console.log(module(coursesArray));
document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

stra = "Астрономия это наука о небесных объектах";

count = (stra, stringsearch) => {

    let a = stra.toLowerCase().split(``).filter(item => item === stringsearch)
    return a.length
}

console.log(count(stra, `а`));

document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let stri = `Сила тяжести приложена к центру масс тела`

cutString = (stri, n) => {
    let a = stri.split(` `);
    let newarr = [];
    for (let i = 0; i < n; i++) {
        newarr.push(a[i]);
        // document.write(a[i])
        // document.write(`<br>`)
    }
    a = newarr.join(` `);
    return a
    // document.write(a)

}
document.write(`<br>`)
// cutString(stri, 3)
document.write(cutString(stri,2))