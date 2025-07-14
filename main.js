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

menuToggleIcon.addEventListener("click", toggleMenu);



