const hamburger = document.querySelectorAll('.hamburger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const dropDownTrigger = document.querySelector('.drop-down-trigger');
const dropDown = document.querySelector('.light-list');
const navItems = document.querySelectorAll('.navigation li');


console.log(navItems);
// hamburger
function toggleMenu () {
  menu.classList.toggle('visible');
  container.classList.toggle('container-active');
}
//dropdown
function toggleDropdown () {
  dropDown.classList.toggle('visible-dropdown');
}

function clearMenu() {
  menu.classList.remove('visible');
  container.classList.remove('container-active');
  dropDown.classList.remove('visible-dropdown');
}
// modals
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}
//open modal
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}
//clode modal after clicking on btn
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});
//close modal after clicking on overlay
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});
//close modal after clicking esc key
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});
//toogle menu after click on 
for (let hamburgerTrigger of hamburger) {
  console.log(hamburgerTrigger);

  hamburgerTrigger.addEventListener('click', function () {
    toggleMenu();
  });
}
//
dropDownTrigger.addEventListener('click', function () {
  toggleDropdown();
});
// clear menu after selecting section
for(let navItem of navItems){
  navItem.addEventListener('click', function(){
    console.log(navItem);
    if(navItem !== dropDownTrigger) {
      clearMenu();
    }
  });
 
 
}

window.addEventListener('resize', function (event) {
  clearMenu();
  closeModal();
});

//jquery scroll sections

$('a[href^="#"]').click(function (e) {
  e.preventDefault();

  var position = $($(this).attr('href')).offset().top;

  $('body, html').animate(
    {
      scrollTop: position,
    } /* speed */
  );
});


const modalTriggers = document.querySelectorAll('.modal-trigger');
for (let modalTrigger of modalTriggers) {

  const dataTag = modalTrigger.getAttribute('data-tag');

  modalTrigger.addEventListener('click', function() {
    openModal('#' + dataTag);
  });
}

