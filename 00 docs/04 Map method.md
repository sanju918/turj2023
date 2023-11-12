# `map` method in Java Script

Map method is used to create a new array from calling a function for every array element.

It doesn't execute the function for empty elements

It doesn't change the original array.

### Example

```javascript
const arr = [1, 2, 3, "sanjay", "bindiya", true, false];

arr.map((el) => console.log(el));

/* OUTPUT
1
2
3
'sanjay'
'bindiya'
true
false
*/
```
