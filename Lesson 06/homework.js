// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string = ['hello world', 'lorem ipsum', 'javascript is cool']

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

document.write(str1.length)
document.write(`<br>`)
document.write(str2.length)
document.write(`<br>`)
document.write(str3.length)
document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

document.write(str1.toUpperCase())
document.write(`<br>`)
document.write(str2.toUpperCase())
document.write(`<br>`)
document.write(str3.toUpperCase())
document.write(`<br>`)

document.write(`<br>NEXT TASK </br>`)
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str4 = 'HELLO WORLD'
document.write(str4.toLowerCase())


document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str5 = ' dirty string   ';
document.write(str5.length)
document.write(`<br>`)
let trimstr5 = str5.trim()
document.write(trimstr5)
document.write(`<br>`)
document.write(trimstr5.length)
document.write(`<br>NEXT TASK </br>`)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str = 'Каждый охотник желает знать'
document.write(`<br>`)
stringToarray = (arr) => {
    return arr.split(` `)
}
let newarr = stringToarray(str);
document.write(newarr)

document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

delete_characters = (str, length) => {
    strslice = str.slice(0, length);
    return strslice

}
// let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7));

document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

insert_dash =(str) => {
    str1 = str.toUpperCase();
    str2 = str1.replaceAll(` `, `-`)
    return str2
}
let strphp = "HTML JavaScript PHP";

document.writeln(insert_dash(strphp))

document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

cap_letter = (string) => {
    let smallcapital = `${string[0]}`
    capital = smallcapital.toUpperCase()
    returncapital = string.replace(`${string[0]}`, capital)
    // document.write(capital)
    document.write(returncapital)
}

let row = `приймає рядок як аргумент і перетворює регістр`
cap_letter(row)

document.write(`<br>`)
document.write(`<br>NEXT TASK </br>`)
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let row2 = `приймає рядок як аргумент і перетворює регістр`

capitalize = (str) => {
    let cap = str.split(` `)
        .map(word => word.charAt(0).toUpperCase()+word.slice(1))
        .join(` `)
// document.write(cap)
    return(cap)
};

document.write(capitalize(row2));