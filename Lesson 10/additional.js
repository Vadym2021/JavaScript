// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить
// зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію
//     про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів,
//     список ід, розміри в форматі висота*ширина
let any = document.getElementsByTagName(`*`)
for(let element of any){
    element.onclick = (e) => {
        e.stopPropagation()//only top element
        console.log(e.target.clientHeight, e.target.clientWidth)

    }
}


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

let anyTwo = document.getElementsByTagName(`*`)
for(let element of any){
    element.onclick = (e) => {
        e.stopPropagation()//only top element
        let popup = document.createElement(`div`)
        popup.innerText = `${e.target.clientHeight}` + ` ` +`${e.target.clientWidth}`
        document.body.appendChild(popup)

        // console.log(e.target.clientHeight, e.target.clientWidth)

    }
}

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let input_false = document.createElement(`input`);
let input_over29 = document.createElement(`input`);
let input_Kiev = document.createElement(`input`);
let tButton = document.createElement(`button`)
tButton.innerText = `Filter
`
input_false.setAttribute(`type`, `checkbox`);
input_over29.setAttribute(`type`, `checkbox`);
input_Kiev.setAttribute(`type`, `checkbox`);

document.body.append(input_false, input_over29, input_Kiev, tButton);

tButton.onclick = function () {
    get_selected_text()
    statusq = input_false.checked
    // ageq = input_over29.checked
    let cityq = ``
    console.log(statusq)
    // console.log(ageq)
    console.log(cityq)


    // let arr = []
    // // for(let i in usersWithAddress) {
    // if (input_false.checked) {
    //     statusq = false
    //     // usersWithAddress.filter(value =>value.status === !status)
    //     // console.log(usersWithAddress.filter(value =>value.status === !status))
    // } else {
    //      statusq = true
    // }
    if (input_over29.checked) {
        ageq = 29
    } else {
        ageq = 0
    }
    if (input_Kiev.checked) {
        cityq = `Kyiv`
        // console.log(usersWithAddress.filter(value => value.status === statusq && value.age >= ageq && value.address.city === cityq))
    } else {
        cityq =``
        // console.log(usersWithAddress.filter(value => value.status === statusq && value.age >= ageq && value.address.city !== cityq))
    }


    console.log(statusq)
    console.log(ageq)
    console.log(cityq)
    // }
    // console.log(input_false.checked)
    // console.log(usersWithAddress.filter(value => value.status === statusq || value.age > ageq || value.address.city === cityq))
    console.log(usersWithAddress.filter(value => value.status === statusq && value.age >= ageq && value.address.city === cityq))
    // console.log(usersWithAddress.filter(value => value.status === statusq && value.age >= ageq ))
    // console.log(usersWithAddress.filter(value => value.status === statusq ))
    // console.log(usersWithAddress.filter(value => value.status === statusq || value.age < ageq ))
    // console.log(usersWithAddress.filter(value => value.address.city === cityq))

}

//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let images = ['image/01.jpeg', 'image/02.jpeg','image/03.jpeg','image/04.jpeg']
wrapDiv = document.createElement(`div`)
imgDiv = document.createElement(`div`)

img = document.createElement(`img`)
img.setAttribute(`src`, `image/01.jpeg`)
imgDiv.setAttribute(`class`, `carusel`)
let forwardButton = document.createElement(`button`)
forwardButton.innerText = `Forward`
let backButton = document.createElement(`button`)
backButton.innerText = `Back`


document.body.appendChild(wrapDiv);
wrapDiv.appendChild(imgDiv)
imgDiv.appendChild(img)

wrapDiv.appendChild(backButton)
wrapDiv.appendChild(forwardButton)

let counter = 0

forwardButton.onclick = () => {
    if (counter = images.length) {
        counter = 3
        img.setAttribute(`src`, images[counter])
        console.log(counter)
    } else {
        counter = counter + 1
        img.setAttribute(`src`, images[counter])
        console.log(counter)
    }
}

backButton.onclick = () => {
    if (counter <= 0) {
        counter = 0
        img.setAttribute(`src`, images[counter])
        console.log(counter)
    } else {
        counter = counter -1
        img.setAttribute(`src`, images[counter])
        console.log(counter)
    }
}





//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
// let text = document.getSelection()
// console.log(text)

function get_selected_text() {
    if (window.getSelection()) {
        var select = window.getSelection();
        console.log(select.toString());
    }
}
window.addEventListener("mousedown", onmousedown)
    get_selected_text()

