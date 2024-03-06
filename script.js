





function addTask() {
  var taskInput = document.getElementById("taskInput").value;
  if (taskInput === "") {
      alert("Please enter a task!");
      return;
  }

  var taskList = document.getElementById("taskList");

  // Create elements
  var taskItem = document.createElement("div");
  var taskText = document.createElement("span");
  var deleteBtn = document.createElement("button");
  
  // Assign classes and text
  taskItem.className = "task-item";
  taskText.textContent = taskInput;
  deleteBtn.textContent = "DELETE";
  deleteBtn.className = "btn btn-danger";
  
  // Event listener for delete button
  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(taskItem);
  });
  
  // Append elements
    taskItem.appendChild(taskText);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
  
  // Clear input field
  document.getElementById("taskInput").value = "";
}

// Add event listener for the ADD button
document.getElementById("addBtn").addEventListener("click", addTask);



function sort() {
  const taskListContainer = document.getElementById("taskList");
  const taskItems = Array.from(taskListContainer.children);

  taskItems.sort((a, b) => a.textContent.localeCompare(b.textContent));
  taskListContainer.innerHTML = "";
  taskItems.forEach((task) => {
    taskListContainer.appendChild(task);
  });
}
document.getElementById("sortBtn").addEventListener("click", sort);
