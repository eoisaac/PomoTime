const interface = {
  userBtn: document.querySelector('[data-js="user-btn"]'),
  settingsBtn: document.querySelector('[data-js="settings-btn"]'),
};

const timer = {
  nextBtn: document.querySelector('[data-js="next-btn"]'),
  prevBtn: document.querySelector('[data-js="prev-btn"]'),
  modeOptions: document.querySelectorAll('.mode__option '),
};

let lastModeOption = timer.modeOptions.length - 1;
let currentModeOption = 0;

const changeModeOptions = (optionIndex) => {
  timer.modeOptions.forEach((option) => {
    option.classList.remove('mode__option--visible');
    timer.modeOptions[optionIndex].classList.add('mode__option--visible');
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
