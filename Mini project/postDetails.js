// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let wrap = document.createElement('div');
wrap.setAttribute(`class`, `wrap`)
document.body.appendChild(wrap)

// let currentPost = JSON.parse(localStorage.getItem('currentPost'))
// for (let element of currentPost) {
//     let post = document.createElement('div');
//     post.setAttribute(`class`, `post`)
//     post.innerHTML = `
//                 <div class="userId">userId: ${element.userId}</div>
//                 <div class="id">id: ${element.id}</div>
//                 <div class="title">title: ${element.title}</div>
//                 <div class="body">body: ${element.body}</div>
//             `;
//     wrap.appendChild(post)
// }


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(respons => respons.json())
    .then(comments => {
        let currentPost = JSON.parse(localStorage.getItem('currentPost'))
        for (let element of currentPost) {
            let post = document.createElement('div');
            post.setAttribute(`class`, `post`)
            post.innerHTML = `
                <div class="userId">userId: ${element.userId}</div>                                       
                <div class="id">id: ${element.id}</div>
                <div class="title">title: ${element.title}</div>
                <div class="body">body: ${element.body}</div>
            `;
            wrap.appendChild(post)

            let commentWrap = document.createElement('div');
            commentWrap.setAttribute(`class`, `commentWrap`)
            wrap.appendChild(commentWrap)

            let postId = JSON.parse(localStorage.getItem('postId'))
            console.log(postId)
            console.log(typeof postId)


            for (const comment of comments) {
                // let postId = JSON.parse(localStorage.getItem('postId'))
                // if (postId === comment.postId) {
                //     console.log(comment.postId)
                let divCardComments = document.createElement('div');
                divCardComments.classList.add('cardComments');
                divCardComments.innerHTML = `
                                        <div>Comment ID: ${comment.id}</div>
                                        <div>Name: ${comment.name}</div>
                                        <div>Email: ${comment.email}</div>
                                        <div>Body: ${comment.body}</div>
                                        `;
                if (postId === comment.postId) {
                    commentWrap.appendChild(divCardComments)
                }

            }
        }
    })


// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так,
// что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)