const button = document.querySelectorAll(".btn");

const handleClick = () => {
    console.log(event.target.textContent);
}

[...button].map((i) => i.addEventListener('click', handleClick));