const hamburger = document.querySelectorAll('.hamburger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const dropDownTrigger = document.querySelector('.drop-down-trigger');
const dropDown = document.querySelector('.light-list');

// hamburger 
for(let hamburgerTrigger of hamburger){
  console.log(hamburgerTrigger);

  hamburgerTrigger.addEventListener('click', function(){
    menu.classList.toggle('visible');
    container.classList.toggle('container-active');
  });

}
//
dropDownTrigger.addEventListener('click', function(){
  console.log('dropDown ', dropDown);
  dropDown.classList.toggle('visible-dropdown');
});


window.addEventListener('resize', function (event) {
 menu.classList.remove('visible');
 container.classList.remove('container-active');
 dropDown.classList.remove('visible-dropdown');

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
