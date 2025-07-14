// Grab elements
const selectElement = selector =>{
    const element= document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong, make sure ${selector} exist! or is typed correctly`)
}

// Nav styles on scroll
const scrollHeader = () =>{
    const headerElement = selectElement("#header");
    if(this.scrollY >= 15){
        headerElement.classList.add("activated");
    }else{
        headerElement.classList.remove("activated");
    }
}

window.addEventListener("scroll", scrollHeader);

// Open menu and search pop up 
const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
}

// Open/Close search form popup

// ---Close the search form popup on esc keypress

menuToggleIcon.addEventListener("click", toggleMenu);

// Switch theme/add to local storage (switching theme functionality)
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');


if(currentTheme){
    bodyElement.classList.add('light-theme');
}


themeToggleBtn.addEventListener('click', ()=>{
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme')
    }
});






