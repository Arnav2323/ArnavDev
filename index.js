window.addEventListener("load", eventListeners);
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

addEventListener("resize", (event) => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    console.log(`height: ${windowHeight} | width: ${windowWidth}`);
    positionPages();
});

let pages = {
    home: null,
    about: null,
    projects: null
}

function eventListeners(){
    pages.home = document.querySelector('#home');
    pages.about = document.querySelector('#about');
    pages.projects = document.querySelector('#projects');
    positionPages();
}

function positionPages(){
    pages.about.style.top = windowHeight * 0.1 + "px";
    console.log(pages.about.style.top);
    pages.projects.style.top = windowHeight * 0.2 + "px";
    console.log(pages.projects.style.top);
}
