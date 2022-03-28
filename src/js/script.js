const interface = {
  userBtn: document.querySelector('[data-js="user-btn"]'),
  settingsBtn: document.querySelector('[data-js="settings-btn"]'),
};

const timer = {
  nextBtn: document.querySelector('[data-js="next-btn"]'),
  prevBtn: document.querySelector('[data-js="prev-btn"]'),
  modeOptions: document.querySelectorAll('.mode__option '),
  startStopBtn: document.querySelector('[data-js="start-stop-btn"]'),
  status: document.querySelector('[data-js="status-msg"]'),
};

// Timer options
const statusMessage = ['Work!', 'Relax!', 'Relax!'];

let lastModeOption = timer.modeOptions.length - 1;
let currentModeOption = 0;

const changeModeOptions = (optionIndex) => {
  timer.modeOptions.forEach((option) => {
    option.classList.remove('mode__option--visible');
    timer.modeOptions[optionIndex].classList.add('mode__option--visible');

    timer.status.textContent = statusMessage[optionIndex];
  });
};

timer.nextBtn.addEventListener('click', () => {
  const optionIndex =
    currentModeOption === lastModeOption
      ? (currentModeOption = 0)
      : ++currentModeOption;

  changeModeOptions(optionIndex);
});

timer.prevBtn.addEventListener('click', () => {
  const optionIndex =
    currentModeOption === 0
      ? (currentModeOption = lastModeOption)
      : --currentModeOption;

  changeModeOptions(optionIndex);
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
