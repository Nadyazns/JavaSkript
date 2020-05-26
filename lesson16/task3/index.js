 export function createArrayOfFunctions(len) {
     let arr = [];
     if (len == undefined) {
         arr.length = 0;
         return arr;
     } else if (typeof len != "number") {
         return null;

     }

     for (let i = 0; i < len; i++) {
         arr[i] = function() {
             return i;
         }

     }

     return arr;
 }

 //  console.log(createArrayOfFunctions()[5]());