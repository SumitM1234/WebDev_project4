document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        if (task === '') return;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task}</span>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                <button class="complete">Complete</button>
            </div>
        `;

        taskList.appendChild(taskItem);
    }
});
