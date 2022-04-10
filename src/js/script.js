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

const leftZero = (number) => (number < 10 ? `0${number}` : number);
// =============================================================================

const DOM = {
  userProfileBtn: document.querySelector('[data-js="user-profile-btn"]'),
  modal: document.querySelector('[data-js="modal"]'),
  toggleSettingsBtn: document.querySelectorAll(
    '[data-js="toggle-settings-btn"]'
  ),

  timer: {
    nextModeBtn: document.querySelector('[data-js="next-btn"]'),
    prevModeBtn: document.querySelector('[data-js="prev-btn"]'),
    modes: document.querySelectorAll('.modes__mode '),
    startStopBtn: document.querySelector('[data-js="start-stop-btn"]'),
    countdown: document.querySelector('[data-js="timer-countdown"]'),
    progress: document.querySelector('[data-js="timer-progress"]'),
    status: document.querySelector('[data-js="status-msg"]'),
  },

  settings: {
    form: document.forms.timerSettings,
  },
};

// [SETTINGS MODAL]=============================================================
const toggleSettingsModal = () => {
  DOM.modal.classList.toggle('modal--visible');
};

const saveSettings = (settingsObj) => {
  const JSONSettings = JSON.stringify(settingsObj);

  setItemOnLocalStorage('settings', JSONSettings);
};

const updateSettings = () => {
  const form = DOM.settings.form;

  let settings = JSON.parse(getItemOfLocalStorage('settings'));
  let settingsArray = Object.entries(settings);

  settingsArray.forEach((setting) => {
    form[setting[0]].value = setting[1];
  });
};

DOM.toggleSettingsBtn.forEach((btn) => {
  btn.addEventListener('click', toggleSettingsModal);
});

DOM.settings.form.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = DOM.settings.form;
  const settings = {
    pomodoroTime: form.pomodoroTime.value,
    shortBreakTime: form.shortBreakTime.value,
    longBreakTime: form.longBreakTime.value,
    // otherSettings,
  };

  saveSettings(settings);
  updateSettings();
  toggleSettingsModal();
});

// [CHANGE TIMER MODE]==========================================================
const statusMessage = ['Work!', 'Relax!', 'Relax!'];

let lastMode = DOM.timer.modes.length - 1;
let currentModeIndex = 0;

const toggleMode = (modeIndex) => {
  DOM.timer.modes.forEach((option) => {
    option.classList.remove('modes__mode--visible');
    DOM.timer.modes[modeIndex].classList.add('modes__mode--visible');

    DOM.timer.status.textContent = statusMessage[modeIndex];
  });
};

DOM.timer.nextModeBtn.addEventListener('click', () => {
  const modeIndex =
    currentModeIndex === lastMode ? (currentModeIndex = 0) : ++currentModeIndex;

  toggleMode(modeIndex);
});

DOM.timer.prevModeBtn.addEventListener('click', () => {
  const modeIndex =
    currentModeIndex === 0 ? (currentModeIndex = lastMode) : --currentModeIndex;

  toggleMode(modeIndex);
});

window.addEventListener('load', () => {
  console.log('Page is fully loaded');
  updateSettings();
});
