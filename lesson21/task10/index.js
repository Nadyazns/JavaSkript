export function finishForm() {
    const doc = document.querySelector(".login-form");
    const newInput = document.createElement("input");
    newInput.setAttribute("type", "password");
    newInput.setAttribute("name", "login");
    doc.append(newInput);

}

// finishForm();