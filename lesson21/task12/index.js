export function squaredNumbers() {
    document.querySelectorAll(".number").forEach((elem) => {
        const square = elem.dataset.number ** 2;
        return elem.dataset.squaredNumber = square;
    });
    // console.log(elems);
    // const elem = document.querySelector(".number");
    // const square = Object.values(elem.dataset) * Object.values(elem.dataset);
    // elem.setAttribute("data-squared-number", `${square}`)

}
// squaredNumbers();