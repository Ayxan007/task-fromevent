const inputs = document.querySelector('.input-new');
const addBtn = document.getElementById('add');
const taskList = document.createElement('ul');
document.body.appendChild(taskList);

let tasks = [];
addBtn.addEventListener('click', function(element){
    element.preventDefault()
    const taskText = inputs.value.trim();
    if(taskText !== ""){
        addtask(taskText);
        inputs.value = '';
    }
});
function addTask(text){
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
            <span class="task-text">${text}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskItem.push(text)
}