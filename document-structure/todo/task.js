const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

tasksAdd.addEventListener('click', event => {
    event.preventDefault();
    taskInput.value = taskInput.value.trim();

    if (taskInput.value) {
        tasksList.insertAdjacentHTML('afterbegin',
            `<div class="task">
  <div class="task__title">
    ${taskInput.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`);

        taskInput.value = '';
    }

    const taskRemove = document.querySelector('.task__remove');
    const task = document.querySelector('.task');


    taskRemove.addEventListener('click', () => {
        task.remove();
    })

})
