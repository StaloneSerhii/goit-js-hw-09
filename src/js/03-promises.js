import Notiflix from 'notiflix';

const formDelay = document.querySelector(".form")
const buttonDelay = document.querySelector("button")
console.log(buttonDelay);

formDelay.addEventListener("input", formDates);
buttonDelay.addEventListener("click", formDelays)
let startCreatePromise = null;

const formDate = {}

function formDates(e) {
  formDate[e.target.name] = e.target.value
}


function formDelays (e) {
  e.preventDefault();
for (let i = 0; i < formDate.amount; i++) {
console.log(i);
 

}



}


// function createPromise(position, delay) {
 
//   const shouldResolve = Math.random() > 0.3;
//  const p = new Promise(res, rej)

//   if (shouldResolve) {
//     res(position, delay.delay)
 

//   } else {
//     rej(position, delay.delay)

//   } return createPromise
  
// }


