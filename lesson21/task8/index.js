 export function createButton(buttonText) {
     // document.querySelector('body')
     //     .append(document.createElement('button')
     //         .textContent = buttonText);
     const body = document.querySelector('body');
     const button = document.createElement('button');
     return body.append(button.textContent = buttonText);
 }

 //  console.log(createButton('hey'));