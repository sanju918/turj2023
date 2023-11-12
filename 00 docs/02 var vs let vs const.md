# `var` vs `let` vs `const`

### 01 - Var vs Let vs Const

`var` is the old way of declaring variables, the new way is with `let` and `const`. Let's see why is that?

1. `Var`

   The problem with `var `is that it's scope is broad, i.e. inside of the function where it is defined. In the following example the variable `i `is defined with `var `keyword inside the `for loop `, however the `i `variable is still accessible outside `for loop`

   ```javascript
   function printLoop() {
     for (var i = 0; i < 5; i++) {
       console.log(i);
     }

     console.log("Value of I in outside for loop: ", i);
   }

   printLoop();

   /* OUTPUT
   
   0
   1
   2
   3
   4
   Value of I in outside for loop:  5
   */
   ```

2. `Let`

   If we try to write the same code using `let` keyword, we will get an error while trying to access the value of variable `i` outside `for loop`. That means the scope of the variable `i` if declared with `let` is block specific.

   ```javascript
   function printLoop() {
     for (let i = 0; i < 5; i++) {
       console.log(i);
     }

     console.log("Value of I in outside for loop: ", i);
   }

   printLoop();

   /* OUTPUT
   0
   1
   2
   3
   4
   Uncaught ReferenceError: i is not defined
       at printLoop (main.jsx:16:51)
       at main.jsx:19:1
   */
   ```

3. `const`

   The `const` variable has the same scope as `let` however the value of the `const` can not be reassigned and remains constant thoughout the lifecycle of the variable.
