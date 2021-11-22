const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')
const toggles = document.querySelectorAll('.toggle')

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
)

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false
    }
    if (cheap === theClickedOne) {
      fast.checked = false
    }
    if (fast === theClickedOne) {
      cheap.checked = false
    }
  }
}