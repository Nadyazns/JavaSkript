export function getSection(num) {
    const span = document.querySelector(`span[data-number='${num}']`);
    const div = span.closest('.box');
    return console.log(div.dataset.section);
}
// getSection(6);