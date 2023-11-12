# Important Operator

## Ternary Operator

- Ternary Operator is used for adding condition
- It is a shortcut way to write `if-else` condition

### Syntax:

`condition ? trueExpression : falseExpression`

### Example

```javascript
const marks = 30;

marks > 35 ? console.log("Pass") : console.log("fail");

/* OUTPUT
fail
*/
```

## Nullish Operators

The `??` operator returns the first argument if it is not nullish (`null` or `undefined`).

Otherwise it returns the second argument.

### Example

```javascript
let name = null;
let text = "missing";
let result = name ?? text;

console.log(result);

/* OUTPUT
missing
*/
```

## Optional Chaining Operator (`?.`)

The `?.` operator returns `undefined` if an object is `undefined` or `null` (instead of throwing an error).

### Example

```javascript
const car = { type: "fiat", model: "500", color: "white" };
console.log(car?.name);
console.log(car?.color);

/* OUTPUT
undefined
white
*/
```

## The instanceof Operator

The **instanceof** operator returns true if an object is an instance of a specified object:

### Example

```javascript
const cars = ["Saab", "Volvo", "BMW"];
(cars instanceof **Array)   **// Returns true
(cars instanceof **Object)  **// Returns true
(cars instanceof **String)  **// Returns false
(cars instanceof **Number)  **// Returns false
```
