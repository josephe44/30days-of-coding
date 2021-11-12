const toggleBtn = document.querySelectorAll('.faq-toggle')

toggleBtn.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentElement.classList.toggle('active')
  })
})
