let taskInput = document.querySelector("#text");
let list = document.querySelector("#list");
let totcount = document.querySelector("#totcount");
let compcount = document.querySelector("#compcount");
let pendcount = document.querySelector("#pendcount");

let total = 0;
let completed = 0;

document.querySelector("#add").addEventListener("click", () => {
    let taskText = taskInput.value.trim();
    if (taskText === "") return;


    let taskItem = document.createElement("div");
    taskItem.className = "task-item";


    let taskPara = document.createElement("p");
    taskPara.innerText = taskText;
    taskPara.className = "task-text";


    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => {
        let newText = prompt("Edit your task:", taskPara.innerText);
        if (newText !== null && newText.trim() !== "") {
            taskPara.innerText = newText.trim();
        }
    });


    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        list.removeChild(taskItem);
        total--;
        updateCounts();
    });

  
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-check";
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            completed++;
        } else {
            completed--;
        }
        updateCounts();
    });

    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskPara);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);
    list.appendChild(taskItem);

   
    total++;
    updateCounts();
    taskInput.value = "";
});

function updateCounts() {
    totcount.innerText = total;
    compcount.innerText = completed;
    pendcount.innerText = total - completed;
}

if (checkbox.checked) {
    taskPara.style.textDecoration = "line-through";
    taskPara.style.opacity = "0.6";
} else {
    taskPara.style.textDecoration = "none";
    taskPara.style.opacity = "1";
}
