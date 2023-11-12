# `filter` method in Java Script

- Filter method is used to filter array.
- In simple words, filter is used to remove items from existing array to a new array.
- It creates a new array filled with elements that pass a test provided by a function
- It doesn't execute the function for empty elements.
- It doesn't change the origianal array.

## Syntax

`array.filter(function(currentValue, index, arr), thisValue)`

| Parameter      | Required | Description                                                             |
| -------------- | -------- | ----------------------------------------------------------------------- |
| `function()`   | Required | A function to run for each array element                                |
| `currentValue` | Required | The value of the current element                                        |
| `index`        | Optional | The index of the current element                                        |
| `arr`          | Optional | The array of the current element                                        |
| `thisValue`    | Optional | Default `undefined` A value passed to the function as it's `this` value |

## Return Value

| Type  | Description                                                                                |
| ----- | ------------------------------------------------------------------------------------------ |
| Array | An array of elements that pass the test.<br />An empty array if no elements pass the test. |

## Example

```javascript
const ages = [5, 23, 14, 30, 21];

const filteredAges = ages.filter((age) => age > 18);

console.log(filteredAges);

/* OUTPUT
(3) [23, 30, 21]
*/
```
