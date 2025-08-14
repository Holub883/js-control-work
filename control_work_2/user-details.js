let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        let userDiv = document.getElementById('user');
        userDiv.innerHTML = `<h2>${user.name} (ID: ${user.id})</h2>
                <p><b>Username:</b> ${user.username}</p>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Website:</b> ${user.website}</p>
                <p><b>Company:</b> ${user.company.name}</p>
                <p><b>Address:</b> ${user.address.city}, ${user.address.street}, ${user.address.suite}</p>`;
    });
function loadPosts() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            let postsDiv = document.getElementById('posts');
            postsDiv.innerHTML = '';
            posts.forEach(post => {
                let div = document.createElement('div');
                div.classList.add('post');
                div.innerHTML = `
                        <h4>${post.title}</h4>
                        <a href="post-details.html?id=${post.id}">Деталі</a>
                    `;
                postsDiv.appendChild(div);
            });
        });
}