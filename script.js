const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const sortBtn = document.getElementById("sortBtn");
const delBtn = document.getElementById("delBtn");

function addTask() {
  const task = taskInput.value.trim(); 
  if (task !== "") {
    const newTaskElement = document.createElement("h3");
    const container = document.querySelector("#taskList");

    newTaskElement.innerHTML = task;
    container.appendChild(newTaskElement);
    taskInput.value = "";
  }
}
addBtn.addEventListener("click", addTask);

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
