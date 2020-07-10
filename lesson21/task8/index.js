 export function createButton(buttonText) {
     // document.querySelector('body')
     //     .append(document.createElement('button')
     //         .textContent = buttonText);
     const body = document.querySelector("body");
     const button = document.createElement("button");
     button.textContent = buttonText;
     return body.append(button);
 }

 //  console.log(createButton('hey'));