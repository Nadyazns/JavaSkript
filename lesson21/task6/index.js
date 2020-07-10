 export function setButton(buttonText) {


     return document.querySelector('body')
         //  .textContent = `<button>${buttonText}</button>`;
         .innerHTML = `<button>${buttonText}</button>`;
 }

 console.log(setButton('ok'));