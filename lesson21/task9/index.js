export function finishList() {
    const elem1 = document.createElement('li');
    elem1.textContent = "1";
    const elem2 = document.createElement('li');
    elem2.textContent = "8";

    document.querySelector('ul').prepend(elem1);
    document.querySelector('ul').append(elem2);

}
// finishList();