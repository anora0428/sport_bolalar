console.log('hello')

var cab = document.querySelector('#cab')
var modalWindow = document.querySelector('#modal')
var overlay = document.querySelector('#overlay');
var close = document.querySelector('#close')

var burg = document.querySelector('#burg')
var body = document.querySelector('body');

cab.addEventListener('click', function(e) {
  overlay.classList.toggle('visible');
  modalWindow.classList.toggle('opened')
  

});

overlay.addEventListener('click', function() {
  overlay.classList.remove('visible');
  modalWindow.classList.remove('opened');
});

burg.addEventListener('click', function(e) {
  menu.classList.toggle('visible')
  body.classList.toggle('no-scroll');

  
});

close.addEventListener('click', function () {
  modalWindow.classList.remove('opened');
  overlay.classList.remove('visible');
});