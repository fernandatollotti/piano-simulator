const pianoKeys = document.querySelectorAll('.piano-keys .key');

let audio = new Audio();

const playTune = (keyValue) => {
  audio.src = `src/assets/tunes/${keyValue}.wav`;

  try {
    audio.play();
  } catch(error) {
    alert(error.message);
  }
}

pianoKeys.forEach(key => {
  const dataKey = key.dataset.key;
  key.addEventListener('click', () => playTune(dataKey));
});