import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector("input#datetime-picker")
const btnStart = document.querySelector("button[data-start]")

const options = {
    // enableSeconds: true,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
        const dataInput = selectedDates[0].getTime()
      const dataNow = new Date();
      const time = dataNow.getTime();
        
      if (dataInput < time) {
          window.alert("Please choose a date in the future")
      } else {
          btnStart.disabled = false;













          
        }
        




  },
};

btnStart.disabled = true
const fp = flatpickr(inputDate, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


