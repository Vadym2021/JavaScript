// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
//     console.log(response);
//     let jsonBody = response.json();
//     return jsonBody;
//
// }).then(users =>{
//     console.log(users);
// })


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users => {
        // console.log(users)
        let wrap = document.createElement(`div`)
        wrap.setAttribute(`class`, `wrap`)
        document.body.appendChild(wrap)
        for (const user of users) {
            let post = document.createElement(`div`)
            post.setAttribute(`class`, `post`)

            wrap.appendChild(post)
            for (const element in user) {
                let elElement = document.createElement(`div`)
                elElement.setAttribute('class', element)
                elElement.innerText = user[element]

                post.appendChild(elElement)
            }

        }
    })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ
// як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(answer => answer.json())
    .then(comments =>{
        let wrap = document.createElement(`div`)
        document.body.appendChild(wrap)

        for (const comment of comments) {
            let div = document.createElement(`div`)
            div.setAttribute(`class`, 'comment')
            wrap.appendChild(div)
            for (const commentElement in comment) {
                let postId = document.createElement(`div`)
                let id = document.createElement(`div`)
                let name = document.createElement(`div`)
                let email = document.createElement(`div`)
                let body = document.createElement(`div`)
                postId.innerText = comment.postId
                id.innerText = comment.id
                name.innerText = comment.name
                email.innerText = comment.email
                body.innerText = comment.body

                div.append(postId,id,name,email,body)


            }

        }

    })