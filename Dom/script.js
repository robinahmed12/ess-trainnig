// Priority buttons: mark active on click
const priorityButtons = document.querySelectorAll(".priority-btn");
priorityButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Remove active from all
    priorityButtons.forEach((b) => b.classList.remove("active"));
    // Add active to clicked
    e.target.classList.add("active");
  });
});

// Add Task button
getById("add-task").addEventListener("click", () => {
  const taskName = getById("task-name").value;
  console.log(taskName);

  const descriptions = getById("description").value;

  // Get active priority
  let selectedP = "";
  priorityButtons.forEach((btn) => {
    if (btn.classList.contains("active")) {
      selectedP = btn.innerText;
    }
  });

  // Get selected category
  const selectedCategory = getById("category").value;

  // Update display
  getById("task-title").innerText = taskName;
  getById("task-description").innerText = descriptions;
  getById("task-priority").innerText = selectedP;
  getById("task-category").innerText = selectedCategory;

  // Create a task object
  let task = {
    title: taskName,
    description: descriptions,
    priority: selectedP,
    category: selectedCategory,
  };

  // Get old tasks from localStorage or empty array
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Add new task to array
  tasks.push(task);

  // Save back to localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  showTasks();

  console.log({ taskName, descriptions, selectedP, selectedCategory });
});

// Function to display tasks from localStorage
function showTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (tasks.length > 0) {
    let lastTask = tasks[tasks.length - 1]; // show latest task only

    getById("task-title").innerText = lastTask.title;
    getById("task-description").innerText = lastTask.description;
    getById("task-priority").innerText = lastTask.priority;
    getById("task-category").innerText = lastTask.category;
  }
}

// Call showTasks() when page loads
window.onload = showTasks;
