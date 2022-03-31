const interface = {
  userBtn: document.querySelector('[data-js="user-btn"]'),
  settingsBtn: document.querySelector('[data-js="settings-btn"]'),
};

const timer = {
  nextBtn: document.querySelector('[data-js="next-btn"]'),
  prevBtn: document.querySelector('[data-js="prev-btn"]'),
  modes: document.querySelectorAll('.modes__mode '),
  startStopBtn: document.querySelector('[data-js="start-stop-btn"]'),
  countdown: document.querySelector('[data-js="timer-countdown"]'),
  status: document.querySelector('[data-js="status-msg"]'),
};

// Timer modes
const statusMessage = ['Work!', 'Relax!', 'Relax!'];

let lastMode = timer.modes.length - 1;
let currentModeIndex = 0;

const toggleMode = (modeIndex) => {
  timer.modes.forEach((option) => {
    option.classList.remove('modes__mode--visible');
    timer.modes[modeIndex].classList.add('modes__mode--visible');

    timer.status.textContent = statusMessage[modeIndex];
  });
};

timer.nextBtn.addEventListener('click', () => {
  const modeIndex =
    currentModeIndex === lastMode
      ? (currentModeIndex = 0)
      : ++currentModeIndex;

  toggleMode(modeIndex);
});

timer.prevBtn.addEventListener('click', () => {
  const modeIndex =
    currentModeIndex === 0
      ? (currentModeIndex = lastMode)
      : --currentModeIndex;

  toggleMode(modeIndex);
});

// Settings Modal
const settings = {
  modal: document.querySelector('[data-js="modal"]'),
  closeBtn: document.querySelector('[data-js="close-modal-btn"]'), 
  SaveBtn: document.querySelector('[data-js="save-settings-btn"]'), 
}

const toggleSettingsModal = () => {
  settings.modal.classList.toggle('modal--visible');
}

interface.settingsBtn.addEventListener('click', toggleSettingsModal);
settings.closeBtn.addEventListener('click', toggleSettingsModal);
settings.SaveBtn.addEventListener('click', toggleSettingsModal);
