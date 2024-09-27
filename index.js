const input = document.querySelector(".input-new");
const addBtn = document.querySelector("#add");
const tskList = document.createElement('ul')
const table = document.querySelector(".table")
table.appendChild(tskList);

let addList = [];

addBtn.addEventListener('click', function(el){
    el.preventDefault();
    const inputText = input.value.trim();
    if(inputText !== "" && !addList.includes(inputText)){
        addTask(inputText);
        input.value = '';
    }
});

function addTask(item){
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div>${item}</div>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;
    tskList.appendChild(listItem);
    addList.push(item);

    listItem.querySelector('.delete').addEventListener('click', function () {
        tskList.removeChild(listItem); 
        addList = addList.filter(element => element !== item); 
    });

      listItem.querySelector('.edit').addEventListener('click', function () {
        const newTask = prompt("Edit Learn", item); 
        if (newTask) {
            listItem.innerHTML = `
                <div>${newTask}</div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;
            addList[addList.indexOf(item)] = newTask;
        }
    });
};