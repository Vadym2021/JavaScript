// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById(`main_header`);
mainHeader.style.backgroundColor = `teal`
mainHeader.innerText = `Python complex`
// b) робить шириниу елементу ul 400px
let ulElement = document.getElementsByTagName(`ul`);
for (const el of ulElement) {
    // console.log(el)
    el.style.width = `400px`
    el.style.backgroundColor = `green`
    console.log(el)
}

// console.log(ulElement)
// ulElement.style.width = `600px`
// ulElement.style.backgroundColor = `green`;


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkClass = document.getElementsByClassName(`linkList`)
for (const el of linkClass) {
    // console.log(el)
    el.style.width = `50%`
    // el.style.backgroundColor = `green`
    console.log(el)
}
// d) отримує текст який зберігається в елементі з класом listElement2
let listEl2 = document.getElementsByClassName(`listElement2`)
for (const el of listEl2) {

    console.log(el.innerText)
}


// e) отримує всі елементи li та змінює ім колір фону на сірий
for (const el of ulElement) {


    el.style.backgroundColor = `grey`
    console.log(el)

}
// f) отримує всі елементи 'a' та додає їм клас anchor
let aElement = document.getElementsByTagName(`a`)
for (const el of aElement) {
    el.className = `anchor`
    console.log(el)

}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const el of aElement) {
    if (el.innerText === `link3`) {
        // el.style.backgroundColor = `red`
        el.style.fontsize = `40px`
        console.log(el)
    }

}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const el of aElement) {
    el.className = `element_XXX`
    el.innerText = `XXX`

}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subheaderElement = document.getElementsByClassName(`sub-header`);
let bgcolor = prompt(`Фон тексту`)
for (const el of subheaderElement) {
    el.style.backgroundColor = bgcolor

}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let textcolor = prompt(`Колір тексту`)
for (const el of subheaderElement) {
   if  (el.innerText === `content 2 segment`){
       el.style.color = textcolor
   }

}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let texttext = prompt(`Текст елементу`)
let content1Element = document.getElementsByClassName(`content_1`);
for (const el of content1Element) {
    el.innerText = texttext

}

// l) отримати елементи p та змінити їм padding на 20px
let pElement = document.getElementsByTagName(`p`);
for (const el of pElement) {
    el.style.padding = `20px`
    console.log(el)

}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let p2Element = document.getElementsByClassName(`text2`);
for (const el of p2Element) {
    el.innerText = `sep-2021`

}

