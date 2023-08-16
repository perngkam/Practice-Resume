/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher the 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')

    // u writte "this.scrollY"  should be "window" becuse u use it everywhere later..                   
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    // you writte window.pageXOffset  , X = horizontal , Y = vertical
    // instead of "pageYOffset" use scrollY, becuse u been using scrollY before

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            //miss spelling = ('.nav__menu a[href*' + sectionId +']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeBotton = document.getElementById('theme--button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBotton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeBotton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeBotton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getSelection())
})