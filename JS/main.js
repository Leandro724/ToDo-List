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
// listItems.addEventListener('click',completeDelete);
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
    taskCompleted.innerText = 'Done';
    taskCompleted.classList.add('completed-btn');
    taskDiv.appendChild(taskCompleted);

    // Edit Button
    const editTask = document.createElement('button');
    editTask.innerText = 'Edit';
    editTask.classList.add('edit-btn');
    taskDiv.appendChild(editTask);

    // Delete button
    const taskDelete = document.createElement('button');
    taskDelete.innerText = 'Delete';
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
 