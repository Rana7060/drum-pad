'use strict';

const keys = document.querySelectorAll('.drum-pad');
const textDisplay = document.querySelector('.pad-name');
const volume = document.querySelector('.volume');
const padContainer = document.querySelector('.pad-container');
const keyboardPad = document.querySelectorAll('.clip');

let clipSound;
volume.volume = 0.5;
textDisplay.innerHTML = '';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
keys.forEach(function (key) {
  key.addEventListener('click', function (e) {
    e.preventDefault();
    clipSound = e.target.querySelector('.clip');
    //BUG
    // key.style.background = 'red';
    // clipSound.style.background = 'red';
    clipSound.play();
    textDisplay.textContent = clipSound.id;
  });
});

keyboardPad.forEach(clip => {
  window.addEventListener('keydown', function (e) {
    if (e.key === clip.id) {
      clip.play();
      textDisplay.textContent = clip.id;
    }
  });
});
