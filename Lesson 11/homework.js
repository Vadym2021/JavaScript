//
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let input_name = document.createElement(`input`);
let input_age = document.createElement(`input`);

let Button = document.createElement(`button`)
Button.innerText = `Save`

document.body.append(input_name, input_age, Button);

Button.onclick = function () {
    let obj = {
        name: input_name.value,
        age: input_age.value
    }


    // let input_name_value = input_name.value
    // let input_age_value = input_age.value
    // localStorage.setItem(`name`, input_name_value)
    // localStorage.setItem(`age`, input_age_value)
    localStorage.setItem('obj', JSON.stringify(obj))
}


document.write(`<br>`)
document.write(`<br>`)
document.write(`next task`)
document.write(`<br>`)
//
// // -створити форму з інпутами для model,type та volume автівки.
// // при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let input_model = document.createElement(`input`);
let input_type = document.createElement(`input`);
let input_volume = document.createElement(`input`);

let carButton = document.createElement(`button`)
carButton.innerText = `Car log`

document.body.append(input_model, input_type, input_volume, carButton);
let carArr = []
carButton.onclick = function () {

    let data = JSON.parse(localStorage.getItem('carArr'))
    if (data) {
        let input_model_value = input_model.value
        let input_type_value = input_type.value
        let input_volume_value = input_volume.value
        data.push({model: input_model_value, type: input_type_value, volume: input_volume_value})
        console.log(data)
        localStorage.setItem(`carArr`, JSON.stringify(data))
    } else {
        let input_model_value = input_model.value
        let input_type_value = input_type.value
        let input_volume_value = input_volume.value
        carArr.push({model: input_model_value, type: input_type_value, volume: input_volume_value})
        console.log(carArr)
        localStorage.setItem(`carArr`, JSON.stringify(carArr))
    }
}


document.write(`<br>`)
document.write(`<br>`)
document.write(`next task`)
document.write(`<br>`)
//
// // є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при
// натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в
// документ всіх обраних на попередньому етапі.


for (let obj of users) {
    let objDiv = document.createElement(`div`)
    let favButton = document.createElement(`button`)
    favButton.innerText = `Add to favorite`
    objDiv.setAttribute(`class`, `objDiv`)
    favButton.setAttribute(`class`, `favButton` + obj)

    objDiv.innerText = JSON.stringify(obj)
    document.write(`<br>`)
    document.body.append(objDiv, favButton)
    document.write(`<br>`)
    favButton.onclick = () => {
        const data = localStorage.getItem('favorites')
        if (data) {
            // const arr = JSON.parse(data)
            localStorage.setItem('favorites', JSON.stringify([...arr, obj]))
        } else {
            localStorage.setItem('favorites', JSON.stringify([obj]))
        }
    }

}
//
// let favButtonExt = document.getElementsByClassName(`favButton`)
// console.log(favButtonExt)
// favButtonExt.onclick = function (){
//     console.log(favButtonExt)
// }