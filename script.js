
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

addBtn.addEventListener("click", function() 
{

    const taskText = taskInput.value.trim();

   
    if (taskText === "") 
    {
        return;
    }

    
    const newTask = document.createElement("div");
    newTask.classList.add("task");

  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

  
    const taskName = document.createElement("span");
    taskName.textContent = taskText;

   
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    
    checkbox.addEventListener("change", function()
     {
        newTask.classList.toggle("completed");
        updateCounts();
    });

  
    deleteBtn.addEventListener("click", function() 
    {
        newTask.remove();
        updateCounts();
    });

    
    newTask.appendChild(checkbox);
    newTask.appendChild(taskName);
    newTask.appendChild(deleteBtn);


    taskList.appendChild(newTask);


    taskInput.value = "";

    updateCounts();
});


function updateCounts() {
    const tasks = document.querySelectorAll(".task");
    const completedTasks = document.querySelectorAll(".task.completed");

    pendingCount.textContent = tasks.length - completedTasks.length;
    completedCount.textContent = completedTasks.length;
}