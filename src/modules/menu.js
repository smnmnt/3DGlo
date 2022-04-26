const menu = () => {
    const menu = document.querySelector('menu')
    const menuBtn = document.querySelector('.menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuElements = menu.querySelectorAll('ul>li>a')

    const toggleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', toggleMenu)
    closeBtn.addEventListener('click' , toggleMenu)
    menuElements.forEach(menuElement => menuElement.addEventListener('click', toggleMenu))
}

export default menu