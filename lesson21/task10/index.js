 export function finishForm() {

     document.querySelector("input").setAttribute("name", "login");
     const newInput = document.createElement("input");
     newInput.setAttribute("type", "password");
     newInput.setAttribute("name", "password");
     document.querySelector(".login-form").append(newInput);

 }

 //  finishForm();