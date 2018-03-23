function playSound(e) {
  const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audioElement) return;
  audioElement.currentTime = 0;
  audioElement.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
