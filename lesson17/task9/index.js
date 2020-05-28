 export function calculator(a, b) {
     switch (this.operation) {
         case '+':
             return a + b;
         case '-':
             return a - b;
         case '/':
             return a / b;
         case '*':
             return a * b;
         default:
             return NaN;
     }
 }


 /*
  * Ф-ция multiplier должна быть создана на основе calculator
  * с использования .bind
  * и должна принимать 2 числа и возвращать из произведение
  */
 export function multiplier(a, b) {

     const functMult = calculator.bind({ operation: '*' });
     return functMult(a, b)
 }

 /*
  * Ф-ция summator должна быть создана на основе calculator
  * с использования .bind
  * и должна принимать 2 числа и возвращать из сумму
  */
 export function summator(a, b) {
     const sum = calculator.bind({ operation: '+' });
     return sum(a, b);
 }

 /*
  * Ф-ция twice должна быть создана на основе calculator
  * с использования .bind
  * и должна принимать 1 число и возвращать это число умноженное на 2
  */
 export function twice(a) {
     const double = calculator.bind({ operation: '*' });
     return double(a, a);
 }