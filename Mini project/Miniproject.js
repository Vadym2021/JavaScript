// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули


fetch('https://jsonplaceholder.typicode.com/users')
    .then(respons => respons.json())
    .then(users => {
        let wrap = document.createElement('div');
        wrap.setAttribute(`class`, `wrap`)
        document.body.appendChild(wrap)

        for (const user of users) {
            let div = document.createElement('div');
            div.setAttribute(`class`, `user`)
            div.innerHTML = `
                <div class="id">ID: ${user.id}</div>\n                                        
                <div class="name">Name: ${user.name}</div>
            `;
            wrap.appendChild(div)
            let userDetails = document.createElement(`button`)
            // let userDetailsHref = document.createElement(`a`)
            // userDetailsHref.setAttribute(`href`, `userDetails.html`)
            userDetails.innerText = 'User Details'
            userDetails.setAttribute(`class`, `userDetails` + user)

            // userDetails.appendChild(userDetailsHref)
            div.appendChild(userDetails)

            userDetails.onclick = () => {
                localStorage.setItem('id', JSON.stringify(user.id))
                localStorage.setItem('user', JSON.stringify([user]))
                window.location='userDetails.html';
            }

            // let userDetails = document.getElementsByClassName('userDetails')
            //
            // userDetails.onclick = () => {
            //     // localStorage.setItem('id', JSON.stringify(user.id))
            //     console.log(user)
            // }
        }
    })


//     for (const user of users) {
//         let div = document.createElement('div');
//         div.setAttribute(`class`, `user`)
//         wrap.appendChild(div)
//
//
//         const recurs = (user, wrappr) => {
//
//             for (const userKey in user) {
//                 let divItem = document.createElement('div');
//                 divItem.setAttribute(`class`, userKey)
//                 typeof user[userKey] === 'object'
//                     ? recurs(user[userKey], divItem)
//                     : divItem.innerText = user[userKey];
//
//
//                 if (divItem.className === 'id' || divItem.className === 'name') {
//                     wrappr.append(divItem);
//                 }
//             }
//         }
//         recurs(user, div);
//         let userDetails = document.createElement(`button`)
//         let userDetailsHref = document.createElement(`a`)
//         userDetailsHref.setAttribute(`href`, `userDetails.html`)
//         userDetailsHref.innerText = 'User Details'
//         userDetails.appendChild(userDetailsHref)
//         div.appendChild(userDetails)
//     }
// })

// userDetails.html

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так,
// что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)