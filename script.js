function myMenu(){
    var x = document.getElementById("Topnav")
    if(x.className === "navbar"){
        x.className += " responsive";
    }else{
        x.className = "navbar";
    }
}

var button = document.getElementById("butten");

window.addEventListener('scroll', scrollFunction);
window.addEventListener('scroll', myFunction);
// window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("Topnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// function reactiveTopNav() {
//     const topNav = document.getElementById('Topnav');
    
//     // checks if the topnav already has the class 'responsive'
//     // if it does, remove it, else, add it in
//     // this only checks for `responsive` and not any other class
//     topNav.classList.contains('responsive')
//         ? topNav.classList.remove('responsive')
//         : topNav.classList.add('responsive');
// }
