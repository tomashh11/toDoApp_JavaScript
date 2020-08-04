const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
const searchInput = document.getElementById('search');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = toDoList;
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
};

searchInput.addEventListener('input', searchTask);

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    renderList();
};

const addTask = (e) => {
    e.preventDefault();

    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = titleTask + "<button>Usuń</button>";
    toDoList.push(task);
    renderList();
    ul.appendChild(task);
    input.value = "";
    task.querySelector("button").addEventListener("click", removeTask);
};

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    });
    taskNumber.textContent = listItems.length;
};

form.addEventListener('submit', addTask);