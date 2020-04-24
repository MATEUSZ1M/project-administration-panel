const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('#navigation');

console.log(hamburger);

hamburger.addEventListener('click', function () {
  navigation.classList.toggle('hamburger');
});
