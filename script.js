
//=============================================================================
// scroll to top 
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//=============================================================================

// navigation bar 
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-times');
};

// Close navbar when scrolling
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var menuBtn = document.querySelector('#menu-btn');
  navbar.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  menuBtn.classList.add('fa-bars');
});
//=============================================================================

// JavaScript code to handle smooth scrolling for navigation links
// const navLinks = document.querySelectorAll('.navbar a');

// for (const link of navLinks) {
//   link.addEventListener('click', smoothScroll);
// }

// function smoothScroll(event) {
//   event.preventDefault();
//   const targetId = event.currentTarget.getAttribute('href');
//   document.querySelector(targetId).scrollIntoView({
//     behavior: 'smooth'
//   });
// }
