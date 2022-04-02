<<<<<<< HEAD
=======
// [LOCAL STORAGE]==============================================================
const setItemOnLocalStorage = (key, value) => {
  if (key && value) localStorage.setItem(key, value);
  return;
};

const getItemOfLocalStorage = (key) => {
  if (key) return localStorage.getItem(key);
};

const removeItemOfLocalStorage = (key) => {
  if (key) localStorage.removeItem(key);
  return;
};

const interface = {
  userBtn: document.querySelector('[data-js="user-btn"]'),
  settingsBtn: document.querySelector('[data-js="settings-btn"]'),
};

const toggleSettingsModal = () => {
  settings.modal.classList.toggle('modal--visible');
};

// [SETTINGS MODAL]=============================================================
const settings = {
  modal: document.querySelector('[data-js="modal"]'),
  closeBtn: document.querySelector('[data-js="close-modal-btn"]'),
  form: document.forms.timerSettings,
};

const { pomodoroTime, shortBreakTime, longBreakTime } = settings.form;
const settingInputs = [pomodoroTime, shortBreakTime, longBreakTime];

const saveSettings = () => {
  settingInputs.forEach((input) => {
    setItemOnLocalStorage(input.name, input.value);
  });
};

const updateInputsOfSettings = () => {
  if (getItemOfLocalStorage('pomodoroTime')) {
    settingInputs.forEach((input) => {
      input.value = getItemOfLocalStorage(input.name);
    });
  }
};

interface.settingsBtn.addEventListener('click', toggleSettingsModal);
settings.closeBtn.addEventListener('click', () => {
  updateInputsOfSettings();
  toggleSettingsModal();
});

settings.form.addEventListener('submit', (event) => {
  event.preventDefault();

  saveSettings();
  toggleSettingsModal();
});

const timer = {
  nextBtn: document.querySelector('[data-js="next-btn"]'),
  prevBtn: document.querySelector('[data-js="prev-btn"]'),
  modes: document.querySelectorAll('.modes__mode '),
  startStopBtn: document.querySelector('[data-js="start-stop-btn"]'),
  countdown: document.querySelector('[data-js="timer-countdown"]'),
  status: document.querySelector('[data-js="status-msg"]'),
};

// [TIMER MODES]================================================================
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
    currentModeIndex === lastMode ? (currentModeIndex = 0) : ++currentModeIndex;

  toggleMode(modeIndex);
});

timer.prevBtn.addEventListener('click', () => {
  const modeIndex =
    currentModeIndex === 0 ? (currentModeIndex = lastMode) : --currentModeIndex;

  toggleMode(modeIndex);
});

window.addEventListener('load', () => {
  updateInputsOfSettings();
  saveSettings();
});
>>>>>>> feature/timer
