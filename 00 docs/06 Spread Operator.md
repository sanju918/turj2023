# Spread `(...)`Operator

This is used to expand an iterable into more elements.

Example:

```javascript
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

/* OUTPUT
Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,May
*/
```

Example:

```javascript
const obj1 = {
  name: "Sanjay",
};

const obj2 = {
  age: 38,
  sex: "Male",
};

const user = { ...obj1, ...obj2 };

console.log(user);

/* OUTPUT

{name: 'Sanjay', age: 38, sex: 'Male'}

*/
```
