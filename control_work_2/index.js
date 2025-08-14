fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let container = document.getElementById('users');
        users.forEach(user => {
            let div = document.createElement('div');
            div.classList.add('user');
            div.innerHTML = `
                    <h3>ID: ${user.id}</h3>
                    <p>Name: ${user.name}</p>
                    <a href="user-details.html?id=${user.id}">Деталі</a>
                `;
            container.appendChild(div);
        });
    });