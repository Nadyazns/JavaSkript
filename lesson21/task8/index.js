export function createButton(buttonText) {
    return document.querySelector('body')
        .append(document.createElement('button')
            .textContent = buttonText);

}

// console.log(createButton('hey'));