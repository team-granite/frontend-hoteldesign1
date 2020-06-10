const toggleButton = document.querySelector('.toggle_button');
const navbarLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    
    navbarLinks.classList.toggle('toggle_active')   
    
})


