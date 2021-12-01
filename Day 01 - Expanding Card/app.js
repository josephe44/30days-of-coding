// getting the panels from html to js
const panels = document.querySelectorAll('.panel')

// looping through the panel with forEach to add an EventListener when clicked
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // calling the removeActiveClasses function
    removeActiveClasses()
    // added the class active
    panel.classList.add('active')
  })
})

// create the removeActiveClasses function
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    // remove the class active
    panel.classList.remove('active')
  })
}
