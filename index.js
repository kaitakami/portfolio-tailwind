const navOpenBtn = document.getElementById('nav-open-button')
const navbar = document.getElementById('navbar')
const navbarElement = document.querySelectorAll('.navbar-element')
const navCloseBtn = document.getElementById('nav-close-button')

let navbarStatus = false;

navOpenBtn.addEventListener('click', () => {
  navbarStatus = !navbarStatus
  if (navbarStatus) {
    navbar.classList.replace('-left-full', 'left-0')

  }
  navbarElement.forEach(element => {
    element.classList.add('block')
   })
})

navCloseBtn.addEventListener('click', () => {
  navbarStatus = !navbarStatus
  if (!navbarStatus) {
    navbar.classList.replace('left-0', '-left-full')
  }
})