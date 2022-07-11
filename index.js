const navOpenBtn = document.getElementById('nav-open-button')
const navbar = document.getElementById('navbar')
const navbarElement = document.querySelectorAll('.navbar-element')
const navCloseBtn = document.getElementById('nav-close-button')

let navbarStatus = false;

navOpenBtn.addEventListener('click', () => {
  navbarStatus = !navbarStatus
  setTimeout(function() {navOpenBtn.classList.add('hidden')}, 100)
  if (navbarStatus) {
    navbar.classList.replace('-left-full', 'left-0')

  }
  navbarElement.forEach(element => {
    element.classList.add('block')
   })
})

navCloseBtn.addEventListener('click', () => {
  navbarStatus = !navbarStatus
  navOpenBtn.classList.remove('hidden')
  if (!navbarStatus) {
    navbar.classList.replace('left-0', '-left-full')
  }
})

function updateList() {
  const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
    return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top)
  })

  document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"))

  document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add('selected-circle')
}

updateList();
window.addEventListener('scroll', () => {
  updateList()
})