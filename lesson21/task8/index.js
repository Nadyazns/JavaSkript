export function createButton(buttonText) {
    document.querySelector('body').append(document.createElement('button').textContent = buttonText);

}

console.log(createButton('hey'));