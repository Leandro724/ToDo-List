// Selectors
const userInput = document.getElementById("userInput");
const inputButton = document.getElementById("inputButton");
const listItems = document.getElementById("listItems");
const DateInput = document.getElementById("DueDate");
let TaskDisplay = document.getElementsByClassName("container2")[0];
let PopupForm = document.getElementsByClassName("container3")[0];
let CloseBtn = document.getElementsByClassName("close-Popup")[0];


// Even Listeners
inputButton.addEventListener('click',addTask);
listItems.addEventListener('click',completeDelete);
CloseBtn.addEventListener('click',newTask);


// Functions
function newTask (){
    if(PopupForm.style.display == "none"){
        PopupForm.style.display = "block";
    }else{
        PopupForm.style.display = "none";
    }
    
}

function addTask (event){
    //Prevent form from submitting
    event.preventDefault();
    // Task Div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    // Create List item
    const newTask = document.createElement('li');
    newTask.classList.add('task-item');
    newTask.innerText =DateInput.value+":"+ userInput.value;
    taskDiv.appendChild(newTask);
    // Task Completed button
    const taskCompleted = document.createElement('button');
    taskCompleted.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>';
    taskCompleted.classList.add('completed-btn');
    taskDiv.appendChild(taskCompleted);

    // Edit Button
    const editTask = document.createElement('button');
    editTask.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
    editTask.classList.add('edit-btn');
    taskDiv.appendChild(editTask);

    // Delete button
    const taskDelete = document.createElement('button');
    taskDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';
    taskDelete.classList.add('delete-btn');
    taskDiv.appendChild(taskDelete);
    // Append to List Items
    listItems.appendChild(taskDiv);
    // Clear the userInput after adding
    userInput.value = "";
}
function completeDelete(e){
    const item = e.target;
    // Delete Task
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        // Animation
        todo.classList.add('slide');
        todo.addEventListener('animationend',function(){
            todo.remove();
        });
        
    }
    // Completed Task
    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    // Edit Task
    if(item.classList[0] === "edit-btn"){
        const parentElement = item.parentElement;
        const todo = parentElement.childNodes;
        let returnValue = todo[0].innerText;
        let returnDate = todo[0].innerText;
        var editValue = prompt('Edit Task', returnValue);
        var editDate = prompt('Edit Date', returnDate);
       returnValue = editDate+":"+editValue;
       todo[0].innerText = returnValue;
       
    
    }
    
}
 