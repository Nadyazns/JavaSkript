 export function finishForm() {
     const doc = document.querySelector(".login-form");
     document.querySelector("input").setAttribute("name", "login");
     const newInput = document.createElement("input");
     newInput.setAttribute("type", "password");
     newInput.setAttribute("name", "password");
     doc.append(newInput);

 }

 //  finishForm();