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
   step = Number(formDate.delay)

   for (let i = 1; i < Number(formDate.amount)+1; i++) {
  console.log(step);
    setTimeout(()=>{
        createPromise(Number(i), step)
        .then(( {position, delay }) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
          })
          .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay} ms`);
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
          });
    }, step)
    
    step+= Number(formDate.step)

   }
}


function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;

    const promise = new Promise((res,rej) => {
    if (shouldResolve) {
      res({position,delay})
    } else {
     rej({position,delay})
    }
    
      })
return promise
}

