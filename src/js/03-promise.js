import Notiflix from 'notiflix';

const formDelay = document.querySelector(".form")
const buttonDelay = document.querySelector("button")
console.log(buttonDelay);

formDelay.addEventListener("input", formDates);
buttonDelay.addEventListener("click", formDelays)

const formDate = {}


function formDates(e) {
  formDate[e.target.name] = e.target.value
}
let step = 0;

function formDelays (e) {
  e.preventDefault();
   step += Number(formDate.delay)
for (let i = 1; i < Number(formDate.amount)+1; i++) {
console.log(step);
const promise = new Promise((resolve, reject) => {
    
    const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve(i);
    } else {
      reject(i);
    }
  }, step);
});


    promise.then(( position, delay ) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${step} ms`);
    console.log(`✅ Fulfilled promise ${position} in ${step} ms`)
  })
 
  .catch(( position, delay ) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${step} ms`);
    console.log(`❌ Rejected promise ${position} in ${step} ms`)
  })
  step += Number(formDate.step)
}}