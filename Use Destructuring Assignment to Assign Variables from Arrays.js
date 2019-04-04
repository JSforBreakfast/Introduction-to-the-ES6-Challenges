let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b];
  // change code above this line
})();
console.log(a, b); 

/* const a = 6, b = 8;
(() => {
  "use strict";
  // change code below this line
 const [b, a] = [a, b];
  // change code above this line
})();
console.log(a, b); */

