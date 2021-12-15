let wrap = document.getElementById('wrap');
let key = 'favorites';
let favorites = JSON.parse(localStorage.getItem(key));

favorites.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user';
    const content = document.createElement('div');
    content.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
    div.appendChild(content);
    wrap.appendChild(div);
})