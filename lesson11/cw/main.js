let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const key = 'favorites';
localStorage.setItem(key, JSON.stringify([]));
const wrap = document.getElementById('wrap');

users.forEach(user => {
    let div = document.createElement('div');
    div.className = 'user';
    let content = document.createElement('div');
    content.innerText = `Name:${user.name}, age:${user.age}, status:${user.status}`;
    let btn = document.createElement('button');
    btn.innerText = 'Add to favorites';
    btn.onclick = function () {
        let favorites = JSON.parse(localStorage.getItem(key));
        favorites.push(user);
        localStorage.setItem(key, JSON.stringify(favorites));

        btn.disabled = true;
    };

    div.append(content, btn);
    wrap.appendChild(div)
});
