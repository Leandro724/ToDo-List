// Selectors
const userInput = document.getElementById("userInput");
const inputButton = document.getElementById("inputButton");
const listItems = document.getElementById("listItems");

// Even Listeners
inputButton.addEventListener('click',addTask)

// Functions

function addTask (event){
    //Prevent form from submitting
    event.preventDefault();
    // Task Div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    // Create List item
    const newTask = document.createElement('li');
    newTask.classList.add('task-item');
    newTask.innerText = 'hello';
    taskDiv.appendChild(newTask);
    // Task Completed button
    const taskCompleted = document.createElement('button');
    taskCompleted.innerText = 'Done';
    taskCompleted.classList.add('completed-btn');
    taskDiv.appendChild(taskCompleted);
    // Delete button
    const taskDelete = document.createElement('button');
    taskDelete.innerText = 'Delete';
    taskDelete.classList.add('completed-btn');
    taskDiv.appendChild(taskDelete);
    // Append to List Items
    listItems.appendChild(taskDiv);
}