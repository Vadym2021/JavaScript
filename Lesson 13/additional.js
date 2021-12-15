// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми,
// action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html,
// при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.createElement('form')
document.body.appendChild(form)

let goodsName = document.createElement('input')
let goodsQty = document.createElement('input')
let goodsPrice = document.createElement('input')
let goodsImg = document.createElement('input')
let goodsCrtButton = document.createElement('button')
goodsCrtButton.innerText = 'Create Good'


form.append(goodsName, goodsQty, goodsPrice, goodsImg, goodsCrtButton);

let arr = []
goodsCrtButton.onclick = (e) => {
    e.preventDefault();

    let object = {
        id: Math.random().toString(16).slice(2),
        name: goodsName.value,
        Qty: goodsQty.value,
        Price: goodsPrice.value,
        Img: goodsImg.value
    }
    arr.push(object)
    localStorage.setItem('Good', JSON.stringify(arr))
}




