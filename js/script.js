const hamburger = document.querySelectorAll('.hamburger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const dropDownTrigger = document.querySelector('.drop-down-trigger');
const dropDown = document.querySelector('.light-list');
const navItems = document.querySelectorAll('.navigation li');

// hamburger
function toggleMenu() {
  menu.classList.toggle('visible');
  container.classList.toggle('container-active');
}

//dropdown
function toggleDropdown() {
  dropDown.classList.toggle('visible-dropdown', true);
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
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

//clode modal after clicking on btn
document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

//close modal after clicking on overlay
document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

//close modal after clicking esc key
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

//toogle menu after click on
for (let hamburgerTrigger of hamburger) {
  hamburgerTrigger.addEventListener('click', function () {
    toggleMenu();
  });
}

dropDownTrigger.addEventListener('click', function () {
  toggleDropdown();
});

// clear menu after selecting section
for (let navItem of navItems) {
  navItem.addEventListener('click', function () {
    if (navItem !== dropDownTrigger) {
      clearMenu();
    }
  });
}

// eslint-disable-next-line
window.addEventListener('resize', function (event) {
  clearMenu();
});

const modalTriggers = document.querySelectorAll('.modal-trigger');
for (let modalTrigger of modalTriggers) {
  const dataTag = modalTrigger.getAttribute('data-tag');

  modalTrigger.addEventListener('click', function () {
    openModal('#' + dataTag);
  });
}

// chart data

var ctx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line
var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [
      {
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      },
    ],
  },
});

//scroll smooth
let anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) { // relitere 
  item.addEventListener('click', (e) => {
    let hashval = item.getAttribute('href');
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}