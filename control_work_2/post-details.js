let postId = new URLSearchParams(window.location.search).get('id');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        document.getElementById('post').innerHTML = `
                <h2>${post.title}</h2>
                <p><b>ID:</b> ${post.id}</p>
                <p><b>User ID:</b> ${post.userId}</p>
                <p>${post.body}</p>
            `;
    });
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        let commentsDiv = document.getElementById('comments');
        comments.forEach(comment => {
            let div = document.createElement('div');
            div.classList.add('comment');
            div.innerHTML = `
                    <h4>${comment.name}</h4>
                    <p><b>Email:</b> ${comment.email}</p>
                    <p>${comment.body}</p>
                `;
            commentsDiv.appendChild(div);
        });
    });