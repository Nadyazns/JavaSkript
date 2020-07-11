const elemSearch = document.querySelector(".search__btn");
const inputSearch = document.querySelector(".search__input");

elemSearch.addEventListener('click', () => {
    console.log(inputSearch.value);
})