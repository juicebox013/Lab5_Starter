// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const changeHorn = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');
  const playButton = document.querySelector('#expose button');

  
  changeHorn.addEventListener('change', function() {
    const selectedHorn = changeHorn.value;

    const hornData = {
      'air-horn': {
        src: 'assets/images/air-horn.svg',
        alt: 'Air Horn',
        audioSrc: 'assets/audio/air-horn.mp3'
      },
      'car-horn': {
        src: 'assets/images/car-horn.svg',
        alt: 'Car Horn',
        audioSrc: 'assets/audio/car-horn.mp3'
      },
      'party-horn': {
        src: 'assets/images/party-horn.svg',
        alt: 'Party Horn',
        audioSrc: 'assets/audio/party-horn.mp3'
      }
    };

    if (hornData[selectedHorn]) {
      hornImage.src = hornData[selectedHorn].src;
      hornImage.alt = hornData[selectedHorn].alt;
      hornAudio.src = hornData[selectedHorn].audioSrc;
    }

  });

  volumeSlider.addEventListener('input', () => {
    const volume = parseInt(volumeSlider.value);
    
    // Set the audio element's volume (0.0 to 1.0)
    audioElement.volume = volume / 100;

    // Update volume icon based on range
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  playButton.addEventListener('click', function() {
    if(audioElement.src) {
      audioElement.play();
    }

    if(changeHorn.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}