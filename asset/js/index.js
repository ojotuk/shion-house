const blogMenu = document.querySelector("#blog-menu");
const blogToggler = document.querySelector("#blog-toggler");
const icon = document.querySelector("#icon-toggler");

const arrowUp = document.querySelector("#arrow-up");
const header = document.querySelector("#header");
const dropEvent = document.querySelector("#blog-back-drop");
const pointerEvent = document.querySelector("#pointer");

//initialization
//check if blog menu contains blog-open class
let currentState = blogMenu.classList.value;
blogClass(currentState);

//onClick events
blogToggler.addEventListener("click", () => {
  blogMenu.classList.toggle("blog-open");
  currentState = blogMenu.classList.value;
  //   console.log(currentState);
  blogClass(currentState);
});

//track + or - icon for mobile blog toggling
function blogClass(currentClass) {
  if (currentClass === "nav-item blog-menu blog-open") {
    // console.log("open");
    icon.classList.add("fa-minus");
    icon.classList.remove("fa-plus");
  } else {
    // console.log("close");
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
}

window.addEventListener("scroll", scrolls);
function scrolls() {
  if (window.scrollY > window.innerHeight / 2) {
    arrowUp.classList.add("arrow-up-show");
    header.classList.add("fixed-header");
    dropEvent.classList.add("blog-drop-pointer-disable");
    pointerEvent.classList.add("blog-drop-pointer-disable");
  } else {
    arrowUp.classList.remove("arrow-up-show");
    header.classList.remove("fixed-header");
    dropEvent.classList.remove("blog-drop-pointer-disable");
    pointerEvent.classList.remove("blog-drop-pointer-disable");
  }
}
// console.log(show);
