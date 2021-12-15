// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі
// на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку,
//     при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку,
//     при клику на яку в окремий блок виводяться всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.setAttribute(`class`, `user`)
            document.body.appendChild(div)
            

            const recurs = (user, wrappr) => {

                for (const userKey in user) {
                    let divItem = document.createElement('div');
                    divItem.setAttribute(`class`, userKey)
                    typeof user[userKey] === 'object'
                        ? recurs(user[userKey], divItem)
                        : divItem.innerText = user[userKey];

                    wrappr.append(divItem);

                }


            }

            recurs(user, div);
            let showPosts = document.createElement(`button`)
            showPosts.innerText = 'Show posts'
            div.appendChild(showPosts)
            showPosts.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {

                            if (user.id === post.userId) {
                                let divPosts = document.createElement('div');
                                // let showComments = document.createElement(`button`)
                                // showComments.innerText = 'Show comments'
                                // div.appendChild(showComments)
                                divPosts.classList.add('cardComments');
                                divPosts.innerHTML = `
                                        <h3>ID: ${post.id}</h3>
                                        <h4>Name: ${post.title}</h4>
                                        <h6>Body: ${post.body}</h6>
                                        `;

                                div.appendChild(divPosts)
                                let showComments = document.createElement(`button`)
                                showComments.innerText = 'Show comments'
                                div.appendChild(showComments)
                                showComments.onclick = () => {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(response => response.json())
                                        .then(comments => {
                                            for (const comment of comments) {

                                                if (user.id === comment.postId) {
                                                    let divCardComments = document.createElement('div');
                                                    divCardComments.classList.add('cardComments');
                                                    divCardComments.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `;
                                                    divPosts.appendChild(divCardComments)
                                                }
                                                showComments.disabled = true;
                                            }
                                        })


                                    // div.appendChild(showComments)
                                }
                                showPosts.disabled = true;
                            }
                        }
                    })
            }
        }
    })








