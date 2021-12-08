//
// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути
//     перезавантаження сторінки)
// Доступ до інпутів через Forms API.
// Отже дайте формі та інпутам всі необхідні атрибути.

let form1 = document.forms.form1
let form1_button = document.getElementById(`form1_button`)
form1_button.onclick = function () {
    console.log(form1.name.value)
    console.log(form1.age.value)
}

document.write(`<br>`)
document.write(`<br>`)
document.write(`next task`)
document.write(`<br>`)
// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк,третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
// (Додатковачастина для завдання)

let input_row = document.createElement(`input`);
let input_column = document.createElement(`input`);
let input_cell = document.createElement(`input`);
let tButton = document.createElement(`button`)
tButton.innerText = `Table`

// let row_value = inpur_row.value
// let column_value = inpur_column.value
// let cell_value = inpur_cell.value

document.body.append(input_row, input_column, input_cell, tButton);

tButton.onclick = function () {

    let row_value = input_row.value
    let column_value = input_column.value
    let cell_value = input_cell.value
    let divTable = document.createElement('div');
    let table = document.createElement(`table`)
    divTable.appendChild(table)
    document.body.appendChild(divTable);

    for (let i = 0; i < row_value; i++) {
        let row = document.createElement(`tr`)
        row.style.border = `1px solid red`
        for (let j = 0; j < column_value; j++) {
            let column = document.createElement(`td`)
            column.style.border = `1px solid red`
            column.innerText = `${cell_value}`
            table.append(row);
            row.appendChild(column)
        }
    }


}

document.write(`<br>`)
document.write(`<br>`)
document.write(`next task`)
document.write(`<br>`)

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let censor = [`fool`, `idiot`, `moran`];

let censor_check = document.createElement(`input`);
let censor_Button = document.createElement(`button`)
censor_Button.innerText = `Censor`
document.body.append(censor_check, censor_Button);

censor_Button.onclick = function () {
    let censor_value = censor_check.value
    for (i = 0; i < censor.length; i++) {
        console.log(censor[i])
        if (censor_value === censor[i]) {
            alert(`Censore failure`)
        }
    }
    // document.body.append(`<br>`)
    document.body.append(`Censor complete`)
}
// document.write(`Censor complete`)

document.write(`<br>`)
document.write(`<br>`)
document.write(`next task`)
document.write(`<br>`)

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку


let censor_check_text = document.createElement(`input`);
let censor_Button_text = document.createElement(`button`)
censor_Button_text.innerText = `Censor text`
document.body.append(censor_check_text, censor_Button_text);





censor_Button_text.onclick = function () {
    let censor_value_text = censor_check_text.value
    let censor_value_array =censor_value_text.split(` `)
    console.log(censor_value_array)
    for (let censor_word = 0; censor_word < censor.length; censor_word++) {
        for(let text_word in censor_value_array) {
            // console.log(censor_value_array[text_word])
            if (censor_value_array[text_word] === censor[censor_word]){
                alert(`Censore failure`)

            }
        }
    }
    // document.body.append(`<br>`)
    document.body.append(`Censor complete`)
}

//cool fool
// get selection