const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

tasksAdd.addEventListener('click', () => {
    const newItem = document.createElement('div');
    newItem.textContent = taskInput.value;
    tasksList.appendChild(newItem);
})


taskInput.addEventListener('input', e => {
    if (e.key !== 'Enter') {
        return;
    }
})