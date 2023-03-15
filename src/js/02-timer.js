import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const divEl = document.querySelector('.timer');
const divBoxEl = document.querySelectorAll('.field');
const bodyEl = document.querySelector('body');
const inputEl = document.querySelector('#datetime-picker');

// inputEl.style.cssText = 'width: 40px;';
// bodyEl.style.cssText =
//   'display: flex; align -items: center; flex-direction: column;';
divEl.style.cssText = 'display: flex; gap: 40px; align -items: center;';
divBoxEl.forEach(e => {
  e.style.color = '#986aad';
  e.style.display = 'flex';
  e.style.flexDirection = 'column';
  e.style.fontSize = '40px';
  e.style.alignItems = 'center';
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(inputEl, options);
