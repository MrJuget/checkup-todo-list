// Обработчик события для формы добавления задач
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value;

    if (taskText) {
        var tasksList = document.getElementById('tasks-list');

        // Создаём новый элемент списка
        var listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Добавляем новый элемент в список
        tasksList.appendChild(listItem);

        // Очищаем поле ввода
        taskInput.value = '';
    }
});