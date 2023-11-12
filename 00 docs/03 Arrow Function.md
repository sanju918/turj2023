# Arrow Function

- Arrow function is another way to define JS functions.
- In other words, we can write JS function in simple and easy way.
- This is very useful feature of JS when we are working in advanced topcis.

## Normal Function

```javascript
function greet() {
  console.log("hello world!");
}

greet();
```

## Arrow Function

```javascript
const greet = () => console.log("Hello World!");
greet();
```

## Passing arguments to arrow function

```javascript
const greet = (name, age) => console.log(`Hello ${name}. Your age is ${age}`);
greet("sanjay", 37);
```
