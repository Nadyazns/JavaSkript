 export function finishList() {
     const elem1 = document.createElement('li');
     elem1.textContent = "1";
     const elem4 = document.createElement('li');
     elem4.textContent = "4";
     const elem6 = document.createElement('li');
     elem6.textContent = "6";
     const elem8 = document.createElement('li');
     elem8.textContent = "8";
     document.querySelector('ul').prepend(elem1);
     document.querySelector('.special').before(elem4);
     document.querySelector('.special').after(elem6);
     document.querySelector('ul').append(elem8);

 }
 finishList();