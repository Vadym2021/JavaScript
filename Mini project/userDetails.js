// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку
// которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую,
// появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку,
// при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

let wrap = document.createElement('div');
wrap.setAttribute(`class`, `wrap`)
document.body.appendChild(wrap)


let currentUser = JSON.parse(localStorage.getItem(`user`))

// for (const user of currentUser) {
//     let div = document.createElement('div');
//     div.setAttribute(`class`, `user`)
//     wrap.append(div);
//     const recurs = (user, wrappr) => {
//         for (const userKey in user) {
//             let divItem = document.createElement('div');
//
//             typeof user[userKey] === 'object'
//                 ? recurs(user[userKey], divItem)
//                 : divItem.innerText = userKey + ' : ' + user[userKey];
//
//             wrappr.append(divItem);
//         }
//
//     }
//
//     recurs(user, div);
// }


if (currentUser) {
    // const arr = currentUser
    for (element of currentUser) {
        let div = document.createElement('div');
        div.setAttribute(`class`, `user`)
        div.innerHTML = `
                <div class="id">ID: ${element.id}</div>
                <div class="name">Name: ${element.name}</div>
                <div class="username">username: ${element.username}</div>
                <div class="email">email: ${element.email}</div>
                <div class="street">street: ${element.address.street}</div>
                <div class="suite">suite: ${element.address.suite}</div>
                <div class="city">city: ${element.address.city}</div>
                <div class="zipcode">zipcode: ${element.address.zipcode}</div>
                <div class="lat">lat: ${element.address.geo.lat}</div>
                <div class="lng">lng: ${element.address.geo.lng}</div>          
                <div class="phone">phone: ${element.phone}</div>
                <div class="website">website: ${element.website}</div>
                <div class="name">name: ${element.company.name}</div>
                <div class="catchPhrase">catchPhrase: ${element.company.catchPhrase}</div>
                <div class="bs">bs: ${element.company.bs}</div>      
            `;
        // <div className="address">Name: ${(JSON.stringify(element.address).replace(/[^a-zA-Z0-9]/g, ''))}</div>
        wrap.appendChild(div)

        let postUser = document.createElement(`button`)
        let postUserHref = document.createElement(`a`)
        postUser.setAttribute(`class`, `postDetails`)
        // postDetailsHref.setAttribute(`href`, `postDetails.html`)
        postUser.innerText = 'post of current user'
        // postDetails.setAttribute(`class`, `postDetails` + element)

        // postUser.appendChild(postUserHref)
        div.appendChild(postUser)

        postUser.onclick = () => {
            let postWrap = document.createElement('div');
            postWrap.setAttribute(`class`, `postWrap`)
            div.appendChild(postWrap)


            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(posts => {
                    for (const post of posts) {
                        let id = JSON.parse(localStorage.getItem('id'))


                        if (id === post.userId) {
                            let divPosts = document.createElement('div');
                            // let showComments = document.createElement(`button`)
                            // showComments.innerText = 'Show comments'
                            // div.appendChild(showComments)
                            divPosts.classList.add('cardComments');
                            divPosts.innerHTML = `
                                        <div>Title: ${post.title}</div>
                                        `;

                            postWrap.appendChild(divPosts)


                            postUser.disabled = true;

                            let postUserDetails = document.createElement(`button`)
                            postUserDetails.innerText = 'Post Details'
                            postUserDetails.setAttribute(`href`, `postDetails.html`)
                            divPosts.appendChild(postUserDetails)
                            postUserDetails.onclick = () => {
                                localStorage.setItem('postId', JSON.stringify(post.id))
                                localStorage.setItem('currentPost',JSON.stringify([post]))
                                window.location='postDetails.html';
                            }
                        }
                    }
                })
        }
    }
}


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