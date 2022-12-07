// document.addEventListener("click", function(e){
//     console.log("page clicked (f1)");
// });

// document.addEventListener("click", function(e){
//     console.log("page clicked (f2)");
// });

// document.addEventListener("click", f1);
// document.addEventListener("click", f1);
// document.addEventListener("click", f1);
// document.addEventListener("click", f1);

// function f1(e){
//     console.log("page clicked (f1)");
// }


const navbar = document.querySelector("nav");
const navLinksDiv = navbar.querySelector(".nav-links-div");
const navLinks = navbar.querySelector(".nav-links");
const expandBtn = navbar.querySelector(".expand-btn");

expandBtn.addEventListener("click", handleNavbar);
navLinksDiv.addEventListener("click", handleNavbar);

navLinks.addEventListener("mouseover", handleMouseOverLinks);
navLinks.addEventListener("mouseout", handleMouseOutLinks);


// handlers

function handleNavbar(e){
    
    if( e.target.classList.contains("nav-links") )  return;

    navLinksDiv.classList.toggle("active-nav-links-div");

}

function handleMouseOverLinks(e){
    
    if( !(e.target.classList.contains("fa") ) ) return;

    const linkText = navbar.querySelector(".nav-links .link-text");

    linkText.textContent = e.target.parentNode.dataset.name;
    linkText.style.top = `${e.target.getBoundingClientRect().top + e.target.offsetHeight/3 }px`;

    // console.log(e.target);
}

function handleMouseOutLinks(e){

    if( !(e.target.classList.contains("fa") ) ) return;

    const linkText = navbar.querySelector(".nav-links .link-text");
    linkText.textContent = "";

}
