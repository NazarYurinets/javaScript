//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(array => {
        let wrap = document.createElement('div');
        wrap.classList.add('row')
        for (let item of array) {
            let block = document.createElement('div');
            block.classList.add('block')

            let id = document.createElement('div');
            id.innerText = `ID: ${item.id}`
            id.classList.add('id')

            let title = document.createElement('div');
            title.innerText = `Title: ${item.title}`;
            title.classList.add('title')

            let body = document.createElement('div');
            body.innerText = `Body: ${item.body}`;
            body.classList.add('body')

            let button = document.createElement('button');
            button.innerText = 'Get comments'

            button.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + item.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            let commentDiv = document.createElement('div');
                            commentDiv.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `;
                            block.append(commentDiv);
                            button.disabled = true;
                        }
                    });
            }

            block.append(id, title, body, button);
            wrap.appendChild(block)
        }

        document.body.appendChild(wrap);
    });