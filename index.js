
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNavDropdown')
const bsCollapse = new bootstrap.Collapse(menuToggle)

window.addEventListener('resize', () => {
  if(window.innerWidth<=768) {
    navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
  })
  }
});

