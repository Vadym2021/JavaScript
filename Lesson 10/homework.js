// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с
// id="text".

let textDiv = document.createElement(`div`);
textDiv.setAttribute(`id`, `text`);
textDiv.setAttribute(`class`, `text`);
document.body.appendChild(textDiv)

let btn1 = document.getElementById(`btn1`)
btn1.onclick = function () {
    textDiv.style.display = `none`;
}


//     - Создайте кнопку, при клике на которую,
//     она будет скрывать сама себя.
let btn2 = document.getElementById(`buttonhide`)
btn2.onclick = function () {
    buttonhide.style.display = `none`;
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача
let age = document.getElementById(`age`).value;
console.log(age)

document.getElementById(`ageButton`).onclick = function () {
    let age = document.getElementById(`age`).value;
    console.log(age)
    if (!age) {
        console.log(`No age input`)
    } else if (age < 18) {
        console.log(`sorry,adults only`)
    } else {
        console.log(`age is ok, welcome`)
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementById(`menu`)
let btn3 = document.getElementById(`btn3`)
btn3.onclick = function () {
    menu.classList.toggle(`none`);
}
// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];

let divFather = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');

    h3.innerText = item.name;
    p.innerHTML = item.body;
    btn.innerHTML = 'Закрий мене'

    btn.onclick = () => {
        p.classList.toggle('none');
        // btn.previousElementSibling.classList.add('pHidden');  // 2варінт який звертаєтсья до ПОПЕРЕДНЬОГО елементу перед btn
    }
    div.append(h3, p, btn);
    divFather.append(div, hr);
}
document.body.appendChild(divFather)