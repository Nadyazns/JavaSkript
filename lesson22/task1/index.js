const elemDiv = document.querySelector(".rect_div");
const elemP = document.querySelector(".rect_p");
const elemSpan = document.querySelector(".rect_span");
const attachHandlers = document.querySelector(".attach-handlers-btn");
const removeHandlers = document.querySelector(".remove-handlers-btn");


const logTarget = (text, color) => {
    const eventListEl = document.querySelector(".events-list");
    eventListEl.innerHTML += `<span style = "color:${color}; margin-left:8px">${text}</span>`;
}


const logGreyDiv = logTarget.bind(null, 'DIV', "grey");
const logGreyP = logTarget.bind(null, 'P', "grey");
const logGreySpan = logTarget.bind(null, 'SPAN', "grey");


const logGreenDiv = logTarget.bind(null, 'DIV', "green");
const logGreenP = logTarget.bind(null, 'P', "green");
const logGreenSpan = logTarget.bind(null, 'SPAN', "green");




const turnOn = () => {
    elemDiv.addEventListener('click', logGreyDiv, true);
    elemP.addEventListener('click', logGreyP, true);
    elemSpan.addEventListener('click', logGreySpan, true);

    elemDiv.addEventListener('click', logGreenDiv);
    elemP.addEventListener('click', logGreenP);
    elemSpan.addEventListener('click', logGreenSpan);
}


const turnOff = () => {
    elemDiv.removeEventListener('click', logGreyDiv, true);
    elemP.removeEventListener('click', logGreyP, true);
    elemSpan.removeEventListener('click', logGreySpan, true);

    elemDiv.removeEventListener('click', logGreenDiv);
    elemP.removeEventListener('click', logGreenP);
    elemSpan.removeEventListener('click', logGreenSpan);
}


const clear = document.querySelector(".clear-btn");
clear.addEventListener('click', () => {
    document.querySelector(".events-list").innerHTML = "";
});
const on = turnOn;
attachHandlers.addEventListener('click', on);
const off = turnOff;
removeHandlers.addEventListener('click', off);