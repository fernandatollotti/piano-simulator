const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider');
const keysCheck = document.querySelector('.keys-check input');

let mappedKeys = [];
let audio = new Audio();
let isPianoOn = true;

const playTune = (keyValue) => {
  if (!isPianoOn) return;
  audio.src = `src/assets/tunes/${keyValue}.wav`;

  try {
    audio.play();
  } catch(error) {
    console.error('Error playing audio:', error.message);
  }

  const clickedKey = document.querySelector(`[data-key="${keyValue}"]`);
  clickedKey.classList.add('active');

  setTimeout(() => {clickedKey.classList.remove('active')}, 150);
}

pianoKeys.forEach(key => {
  const dataKey = key.dataset.key;
  key.addEventListener('click', () => playTune(dataKey));
  mappedKeys.push(dataKey);
});

document.addEventListener('keydown', event => {
  if (mappedKeys.includes(event.key))
    playTune(event.key);
});

const handleVolume = (event) => {
  audio.volume = event.target.value;
}

const showHideKeys = () => {
  isPianoOn = !isPianoOn;
  pianoKeys.forEach(key => {
    key.classList.toggle('hide');
  });

  if (!isPianoOn && !audio.paused) {
    audio.pause(); 
  }
}

volumeSlider.addEventListener('input', handleVolume);

keysCheck.addEventListener('click', showHideKeys);