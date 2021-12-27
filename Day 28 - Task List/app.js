const inputAdd = document.getElementById('input-add')
const addBtn = document.getElementById('add-btn')
const taskCard = document.getElementById('task-card')

// Event Listener on Creating Task
addBtn.addEventListener('click', createTask)

// Event Listener on removing task
taskCard.addEventListener('click', removeTask)

// Creating Each task
function createTask(e) {
  // getting the task-card and creating a new div
  const taskCard = document.getElementById('task-card')

  // creating the div, that will contain the task
  taskCard.innerHTML += `
  <div class= 'bg-white text-gray-500 flex justify-between mb-3 py-2 px-1 border-gray-200 rounded-lg border mt-3 mx-auto shadow-md transition duration-500 transform hover:translate-x-2 cursor-pointer'>
    <p class='text-black font-semibold ml-2'>${inputAdd.value}</p>
    <span class='text-red-500 mr-2'><i id='remove-task' class='fas fa-times-circle'></i></span>
  </div>`

  // clearing the input after clicking the add button
  inputAdd.value = ''

  // Preventing the default behaviour of the form
  e.preventDefault()
}

// Deleting Each Task
function removeTask(e) {
  // checking if the element clicked is the remove button
  if (e.target.id === 'remove-task') {
    // calling the grandParent and removing it from them Task-Card
    e.target.parentElement.parentElement.remove()
  }
}
