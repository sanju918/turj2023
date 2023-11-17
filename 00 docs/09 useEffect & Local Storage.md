# Local Storage

- Local Storage is a feature in web browsers that allows web developers to store data on a user's computer
- This data can be accessed later by the website or web application
- Storage can only store string values, so if you want to store json data then add `JSON.stringify()` method.
- While accessing the stored value for JSON, use `JSON.parse()` to convert back into JSON from string.
- Local Storage is like a browser database for storing some details for web applications. This local storage is different for every user.
- So we can store here our tasks in local storage using `localStorage.setItem()` but make sure you store that array using `JSON.stringify()` because if we don’t convert our array in JSON string, then later we cann’t access it as array.
- Now for getting item from local storage, we use `localStorage.getItem()` and then we have to convert that string in array using `JSON.parse()`

## `useEffect`

- `useEffect` hook is used to perform side effects in our component.

### What is Side Effects

- Side effects are actions which are performed with the "Outside World" such as

  - Fetching data form API
  - Directly updating DOM
  - Timer functions (setTimeout - setInterval)

- Syntax
  - `useEffect( () => {<what_to_run>}, [<when_to_run>])`

### What happens when

- `no second/dependent argument is passed`

  - If no dependent argument is passed, the useEffect hook will run everytime the component is rendered. That is, it will run gurannteed once.

- `with empty array []`

  - If empty array is passed, the function will run only once when the component is rendered first time.

- `with some variable passed to array [var1]`
  - The function will run every time the variable is changed

### Example

```javascript
const [tasks, setTasks] = useState(
  JSON.parse(localStorage.getItem("tasks")) || []
);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```
