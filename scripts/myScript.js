window.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
  const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audioElement);
  if(!audioElement) return;
  audioElement.currentTime = 0;
  audioElement.play();
});
