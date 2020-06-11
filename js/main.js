const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

