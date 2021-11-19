// Selectors

// Add Task Popup Selectors
const userInput = document.querySelector(".userInput");
const DateInput = document.querySelector(".DueDate");
const inputButton = document.querySelector(".inputButton");
let CloseBtn = document.querySelector(".close-Popup");
let PopupForm = document.querySelector(".container3");

// Edit Task Popup Selectors
const editInput = document.querySelector(".editInput");
const editDate = document.querySelector(".editDate");
let CloseEdit = document.querySelector(".close-Edit");
let EditForm = document.querySelector(".container4");
let saveChanges = document.querySelector(".saveChanges");

// Tasks List Selector
const MyTasks = document.querySelector(".MyTasks");

// Even Listeners
document.addEventListener("DOMContentLoaded", getTasks);
inputButton.addEventListener('click',addTask);
MyTasks.addEventListener('click',deleteTask);
CloseEdit.addEventListener('click',closeEdit);
CloseBtn.addEventListener('click',newTask);
saveChanges.addEventListener('click',editTask)



// Functions
function newTask (){
    if(PopupForm.style.display == "none"){
        PopupForm.style.display = "block";
    }else{
        PopupForm.style.display = "none";
    }
    
}
function closeEdit (){
    if(EditForm.style.display == "none"){
        EditForm.style.display = "block";
    }else{
        EditForm.style.display = "none";
    }
}

function addTask (event){
    //Prevent form from submitting
    event.preventDefault();
    // Creating List Item
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('listTask');

    // Creating Divs Inside List Item
    const taskDiv1 = document.createElement('div');
    taskDiv1.classList.add('colorDiv');
    // taskDiv.appendChild(taskDiv1);

    const taskDiv2 = document.createElement('div');
    taskDiv2.classList.add('taskInput');
    const taskName = userInput.value;
    taskDiv2.innerHTML = taskName;
    // taskDiv.appendChild(taskDiv2);

    const taskDiv3 = document.createElement('div');
    taskDiv3.classList.add('dueDate');
    const taskDate = DateInput.value;
    
    taskDiv3.innerHTML = taskDate;
    // taskDiv.appendChild(taskDiv3);

    const taskDiv4 = document.createElement('div');
    taskDiv4.classList.add('controls');
    // taskDiv.appendChild(taskDiv4);

    // Creating Control buttons Complete/Edit/Delete

    // Task Completed button
    const taskCompleted = document.createElement('button');
    taskCompleted.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>';
    taskCompleted.classList.add('completed-btn');
    taskDiv4.appendChild(taskCompleted);

    // Edit Button
    const editTask = document.createElement('button');
    editTask.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
    editTask.classList.add('edit-btn');
    editTask.style.background = "rgb(62, 197, 241)";
    taskDiv4.appendChild(editTask);

    // Delete button
    const taskDelete = document.createElement('button');
    taskDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';
    taskDelete.classList.add('delete-btn');
    taskDelete.style.background = "red";
    taskDiv4.appendChild(taskDelete);

    
    // Append to List Items

    const listItem = document.createElement("li");
    listItem.appendChild(taskDiv1)
    listItem.appendChild(taskDiv2)
    listItem.appendChild(taskDiv3)
    listItem.appendChild(taskDiv4)
    taskDiv.appendChild(listItem);
    MyTasks.appendChild(taskDiv);
    
    // Save to LocalStorage
    saveLocalTasks(userInput.value,DateInput.value);

    // Clear the userInput after adding
    userInput.value = "";
    
}
function deleteTask(e){
    const item = e.target;
    // Delete Task
    if(item.classList[0] === "delete-btn"){
        const task = item.parentElement;
        const childDiv = task.parentElement;
        let parentDiv = childDiv.parentElement;
        
        // Animation
        parentDiv.classList.add('slide');
        // Just before the animation ends
        // removeLocalTasks(task);
        console.log(childDiv[1].innerText)


        // parentDiv.addEventListener('animationend',function(){
        //     parentDiv.remove();
        // });
        
    }
   
    // Completed Task
    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        const childDiv = todo.parentElement;
        console.log(childDiv);
        const parentDiv = childDiv.parentElement;
        parentDiv.classList.toggle("completed");
    }
    // Edit Task
    if(item.classList[0] === "edit-btn"){
      closeEdit ();
    }
    
}
function editTask(e){
  const item = e.target;
  console.log(item);
}
function saveLocalTasks(task,date) {
  let Tasks;
  let Storage;
 
  if(localStorage.getItem("Tasks") === null){
    Tasks = {};
    Storage = [];
   
  }else {

    storedTasks = localStorage.getItem("Tasks");
    Storage = JSON.parse(storedTasks)
    Tasks = {};
  }
  
  Tasks.Task = task;
  Tasks.Date = date;
  Storage.push(Tasks);

  localStorage.setItem("Tasks", JSON.stringify(Storage));

  }
function removeLocalTasks(task) {
  let results;
  let storedTasks;

  let Storage;
  if(localStorage.getItem("Tasks") === null){
    Storage = [];
  } else {
    storedTasks = localStorage.getItem("Tasks");
    Storage = JSON.parse(storedTasks)
    results = Storage.filter(obj => obj.Task !== task);
    console.log(results)
  }
  localStorage.setItem("Tasks", JSON.stringify(results));
  }
function getTasks() {
  let Tasks;
  let Storage;
 
  if(localStorage.getItem("Tasks") === null){
    Tasks = {};
    Storage = [];
   
  }else {

    storedTasks = localStorage.getItem("Tasks");
    Storage = JSON.parse(storedTasks)
  }

  Storage.forEach(function(task){
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('listTask');

    // Creating Divs Inside List Item
    const taskDiv1 = document.createElement('div');
    taskDiv1.classList.add('colorDiv');
    // taskDiv.appendChild(taskDiv1);

    const taskDiv2 = document.createElement('div');
    taskDiv2.classList.add('taskInput');
    const taskName = task;
    taskDiv2.innerHTML = taskName;
    // taskDiv.appendChild(taskDiv2);

    const taskDiv3 = document.createElement('div');
    taskDiv3.classList.add('dueDate');
    const taskDate = task;
    taskDiv3.innerHTML = taskDate;
    // taskDiv.appendChild(taskDiv3);

    const taskDiv4 = document.createElement('div');
    taskDiv4.classList.add('controls');
    // taskDiv.appendChild(taskDiv4);

    // Creating Control buttons Complete/Edit/Delete

    // Task Completed button
    const taskCompleted = document.createElement('button');
    taskCompleted.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>';
    taskCompleted.classList.add('completed-btn');
    taskDiv4.appendChild(taskCompleted);

    // Edit Button
    const editTask = document.createElement('button');
    editTask.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
    editTask.classList.add('edit-btn');
    editTask.style.background = "rgb(62, 197, 241)";
    taskDiv4.appendChild(editTask);

    // Delete button
    const taskDelete = document.createElement('button');
    taskDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';
    taskDelete.classList.add('delete-btn');
    taskDelete.style.background = "red";
    taskDiv4.appendChild(taskDelete);

    
    // Append to List Items

    const listItem = document.createElement("li");
    listItem.appendChild(taskDiv1)
    listItem.appendChild(taskDiv2)
    listItem.appendChild(taskDiv3)
    listItem.appendChild(taskDiv4)
    taskDiv.appendChild(listItem);
    MyTasks.appendChild(taskDiv);
    
    // Clear the userInput after adding
    userInput.value = "";

  })
  

  }
  

