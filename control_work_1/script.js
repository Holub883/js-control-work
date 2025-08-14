// Початковий масив
let pairs = [
    { name: 'Hello', value: 'Word' },
    { name: 'Happy', value: 'Coding' }
];

// Функція створення списку
function createList() {
    let list = document.getElementById('list');
    list.innerHTML = '';
    pairs.forEach((pair, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
              <label>
                <input type="checkbox" data-index="${index}"> ${pair.name} = ${pair.value}
              </label>
            `;
        list.appendChild(li);
    });
}
// Додавання
function addPair(event) {
    if (event) event.preventDefault();
    let input = document.getElementById('inputField');
    let value = input.value.trim();
    // Перевірка
    let regex = /^([a-zа-яіїєєґ0-9]+)\s*=\s*([a-zа-яіїєєґ0-9]+)$/i;
    let match = value.match(regex);
    if (!match) {
        alert('Wrong');
        return;
    }
    let name = match[1];
    let val = match[2];
    pairs.push({name, value: val});
    input.value = '';
    createList();
}
// Сортування по імені
function sortByName() {
    pairs.sort((a, b) => a.name.localeCompare(b.name));
    createList();
}
// Сортування по кількості
function sortByValue() {
    pairs.sort((a, b) => a.value.localeCompare(b.value));
    createList();
}
// Видалення
function deleteSelected() {
    let checkboxes = document.querySelectorAll('#list input[type="checkbox"]');
    let toDelete = [];
    checkboxes.forEach(cb => {
        if (cb.checked) {
            toDelete.push(Number(cb.dataset.index));
        }
    });
    pairs = pairs.filter((_, i) => !toDelete.includes(i));
    createList();
}
// Виклик
createList();
