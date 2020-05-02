const hamburger = document.querySelector('#hamburger');
const sidenav = document.querySelector('.sidenav');
const close = document.querySelector('#close');
const container = document.querySelector('#container');



hamburger.addEventListener('click', function(){
  sidenav.classList.add('visible');
  container.classList.add('container-active');
});

close.addEventListener('click', function(){
  sidenav.classList.remove('visible');
  container.classList.remove('container-active');

});


//mobile
const toggleMobileTrigger = document.querySelector('#toggleMobileTrigger');
const toggleDropdownTrigger = document.querySelector('#dropdown-trigger');
const navMobile = document.querySelector('#nav-mobile');
const dropdown = document.querySelector('#dropdown');

toggleMobileTrigger.addEventListener('click', function(){
  console.log('dupa');
  navMobile.classList.toggle('active-mobile');
});

toggleDropdownTrigger.addEventListener('click', function(){
  console.log('pipa');
  dropdown.classList.toggle('active-dropdown');
});