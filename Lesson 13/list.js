let wrap = document.createElement(`div`)
wrap.setAttribute('id','wrap')
document.body.appendChild(wrap)

let goodList = JSON.parse(localStorage.getItem('Good'))

// document.write(goodList)
let CancelAllButton = document.createElement('button')
CancelAllButton.innerText = 'Delete all Goods'
wrap.appendChild(CancelAllButton)

CancelAllButton.onclick = () => {
    localStorage.removeItem('Good')
}

for (const goodListElement of goodList) {
    let good = document.createElement(`div`)
    wrap.appendChild(good)



    let goodName = document.createElement(`div`)
    goodName.innerText=goodListElement.name
    let goodQty = document.createElement('div')
    goodQty.innerText=goodListElement.Qty
    let goodPrice = document.createElement('div')
    goodPrice.innerText=goodListElement.Price
    let goodImg = document.createElement('img')
    goodImg.setAttribute('src',goodListElement.Img)

    let CancelButton = document.createElement('button')
    CancelButton.innerText = 'Delete from Chart'


    good.append(goodName,goodQty,goodPrice,goodImg,CancelButton)

    CancelButton.onclick = () => {
        const newArr = goodList.filter(item => item.id !== goodListElement.id)

        localStorage.setItem('Good', JSON.stringify(newArr))
        location.reload();
    }
}

// при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі
// товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється
//     конкретний обраний  товар


