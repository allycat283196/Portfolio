// <--------------------------------------------------fixed menus ----------------------------------------------------------->
window.onscroll = function() {stickyMenu()};

// get menus
var icons = document.getElementById("menus");

// Get the offset position of the navbar
var sticky = icons.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
    if (window.pageYOffset > sticky) {
        icons.classList.add("sticky");
    } else {
      icons.classList.remove("sticky");
    }
  }

// <---------------------------------------------------Search modal --------------------------------------------------------------->

// Get modal element for search
var modal = document.getElementById("simpleModal");
// Get open modal button
var searchBtn = document.getElementById("search_icon");
// Get close button 
var closeBtn = document.getElementById('searchClose');

// Listen for open click
searchBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside click
//Function to open modal 
function openModal() {
    modal.style.display = "block";
}

//Function to close modal 
function closeModal() {
    modal.style.display = "none";
}
// <---------------------------------------------------Menu Modal ------------------------------------------------------------->
// Get modal element
var menuModal = document.getElementById("menuModal");
// Get open modal button
var menuBtn = document.getElementsByClassName("menu_icon")[0];
// Get close button 
var menucloseBtn = document.getElementById('menuClose');


// Listen for open click
menuBtn.addEventListener('click', openMenuModal);
// Listen for close click
menucloseBtn.addEventListener('click', closeMenuModal);
//Function to open modal 
function openMenuModal() {
    menuModal.style.display = "block";
}

//Function to close modal 
function closeMenuModal() {
    menuModal.style.display = "none";
}


// <-------------------------------------------------Video Modal ------------------------------------------------------------->

// Get modal element
var video_modal = document.getElementById("videoModal");
// Get open modal button
var videomodalBtn = document.getElementById("play");
// Get close button 
var videoCloseBtn = document.getElementById('video_close');


// Listen for open click
videomodalBtn.addEventListener('click', openVideoModal);
// Listen for close click
videoCloseBtn.addEventListener('click', closeVideoModal);
//Function to open modal 
function openVideoModal() {
    video_modal.style.display = "block";
}

//Function to close modal 
function closeVideoModal() {
    video_modal.style.display = "none";
}


