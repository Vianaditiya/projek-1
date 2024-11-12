document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('#hamburger-menu')
    btnMenu.addEventListener('click', () => {
        document.querySelector('.navbar .navbar-nav').classList.toggle('active')
    })
})