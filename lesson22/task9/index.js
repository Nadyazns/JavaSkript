const elem = document.querySelector(".task-status");
elem.addEventListener('click', (event) => {
    console.log(event.target.checked);
})