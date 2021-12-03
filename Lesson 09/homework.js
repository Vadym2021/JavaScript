// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


let block = document.createElement(`div`)
block.className = (`wrap, collapse, alpha, beta`);
block.style.backgroundColor = `yellow`;
block.style.color = `red`;
block.innerText = `ghfhghgc`
document.body.appendChild(block)
let blockClone = block.cloneNode(true)
document.body.appendChild(blockClone)

//// - Є масив:
// let property = ['Main','Products','About us','Contacts'];
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного
// // елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
//
// let uMen = document.getElementsByClassName(`menu`)
// // console.log(uMen.innerText)
// // console.log(uMen)
// for(const i of property){
//     let liEl = document.createElement(`li`)
//     liEl.innerText = i;
//     // console.log(i)
//     // console.log(liEl)
//   uMen.appendChild(liEl);
// }



// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let el of coursesAndDurationArray){
    let cdBlock = document.createElement(`div`)
    // console.log(coursesAndDurationArray.title[el])
    cdBlock.innerText = `${el.title} ${el.monthDuration}` ;

    document.body.appendChild(cdBlock)
}


// - Є масив
let cADArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for(i of cADArray){
    let divBlock = document.createElement(`div`);
    let h1El = document.createElement(`h1`);
    h1El.innerText = i.title;
    let par = document.createElement(`p`);
    par.innerText = i.monthDuration;

    divBlock.appendChild(h1El);
    divBlock.appendChild(par);
    document.body.appendChild(divBlock);

}
