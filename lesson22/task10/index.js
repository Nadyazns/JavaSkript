const elem = document.querySelectorAll('.pagination__page');
const handleClick = (event) => {
        console.log(event.target.textContent);
    }
    [...elem].map(i => { i.addEventListener('click', handleClick) });