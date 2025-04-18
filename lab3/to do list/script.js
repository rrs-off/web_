function addTask() {
    let taskInput = document.getElementById("taskInput");
    let a = length(taskInput);
    let taskText = taskInput.value.trim();
    if (taskText === null) alert("enter text");



    if (taskText === "") return;
    
    let li = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        li.classList.toggle("done");
    };
    
    let span = document.createElement("span");
    span.textContent = taskText;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="Delete">';
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
