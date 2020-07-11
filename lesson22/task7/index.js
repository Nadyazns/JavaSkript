const button = document.querySelectorAll(".btn");

const handleClick = (event) => {
    console.log(event.target.textContent);
}

[...button].map((i) => i.addEventListener('click', handleClick));