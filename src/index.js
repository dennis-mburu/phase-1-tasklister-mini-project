document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")

  form.addEventListener('submit', e => {
    e.preventDefault()
    // buildToDo(e.target.new-task-description.value)
    buildToDo(e.target.new.value)
    form.reset()
    
  })

});


function buildToDo(toDos){
  // console.log(toDos)
  let li = document.createElement('li')
  let btn = document.createElement("button")
  let cont = document.getElementById('tasks')
  btn.textContent = 'delete'
  btn.addEventListener('click', handleDelete)
  li.textContent = `${toDos}  `
  li.appendChild(btn)
  cont.appendChild(li)
  
}
  

function handleDelete(e){
  // console.log(e.target)
  e.target.parentNode.remove()
}








//https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/

// OO solution
// document.addEventListener("DOMContentLoaded", () => {
//   // initialize taskList class
//   const taskList = new TaskList();
//   //grab all the necessary DOM elements

//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const taskUl = document.getElementById("tasks");

//   const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
//   //attach event listeners

//   newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     taskList.createNewTask(newTaskDescription.value);
//     // reset form
//     e.target.reset();
//     renderApp();
//   });

//   taskUl.addEventListener("click", (e) => {
//     if (e.target.nodeName === "BUTTON") {
//       taskList.deleteTask(e.target.dataset.description);
//       renderApp();
//     }
//   });
// });
