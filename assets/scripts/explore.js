// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices = [];

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeakTextarea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('#explore button'); // Assuming this is the "Press to Talk" button
  const faceImage = document.querySelector('#explore img'); // Assuming this is the face image

  const openMouthImageSrc = 'assets/images/smiling-open.png';
  const closedMouthImageSrc = 'assets/images/smiling.png'; // Default face

  // Function to populate the voice select dropdown
  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear any existing options

    if (voices.length === 0 && voiceSelect.options.length === 0) {
        // Add a temporary placeholder if no voices loaded yet
        const placeholderOption = document.createElement('option');
        placeholderOption.textContent = 'Loading voices...';
        placeholderOption.disabled = true;
        voiceSelect.appendChild(placeholderOption);
    }

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
    // Remove placeholder if voices loaded
    if (voices.length > 0 && voiceSelect.options[0] && voiceSelect.options[0].textContent === 'Loading voices...') {
        voiceSelect.removeChild(voiceSelect.options[0]);
    }
  }

  // Populate voices when they are loaded
  populateVoiceList(); // Initial call, might be empty
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Set initial face image
  faceImage.src = closedMouthImageSrc;

  // Event listener for the talk button
  talkButton.addEventListener('click', function() {
    const text = textToSpeakTextarea.value;
    if (!text.trim()) {
      alert('Please enter some text to speak.');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelect.selectedOptions[0];
    const voiceName = selectedOption ? selectedOption.getAttribute('data-name') : null;
    
    if (voiceName) {
      utterance.voice = voices.find(voice => voice.name === voiceName);
    }

    utterance.onstart = () => { faceImage.src = openMouthImageSrc; };
    utterance.onend = () => { faceImage.src = closedMouthImageSrc; };
    utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
        faceImage.src = closedMouthImageSrc; // Reset face on error
    };

    speechSynthesis.speak(utterance);
  });
}