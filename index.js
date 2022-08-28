const toggleButton = document.getElementsByClassName('navbar-toggle')[0]
const navItems = document.getElementsByClassName('nav-items')
toggleButton.addEventListener('click', function () {
  for (var i = 0; i < navItems.length; i++)
    navItems[i].classList.toggle('active')
})
