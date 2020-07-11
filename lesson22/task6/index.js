const elem = document.querySelector(".single-use-btn");
const logger = () => {
    console.log("clicked");
    elem.removeEventListener('click', logger);
}
elem.addEventListener('click', logger);