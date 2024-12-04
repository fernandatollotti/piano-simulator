const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider');

let mappedKeys = [];
let audio = new Audio();

const playTune = (keyValue) => {
  audio.src = `src/assets/tunes/${keyValue}.wav`;

  try {
    audio.play();
  } catch(error) {
    alert(error.message);
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

volumeSlider.addEventListener('input', handleVolume);