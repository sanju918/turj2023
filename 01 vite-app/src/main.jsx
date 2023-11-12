// import ReactDOM from "react-dom/client";
// import "./main.css";

// const myFirstElement = <h1>This is my first element</h1>;

// const rootElement = document.getElementById("root");
// const dom = ReactDOM.createRoot(rootElement);

// dom.render(myFirstElement);

const marks = 30;

marks > 35 ? console.log("Pass") : console.log("fail");

let name = null;
let text = "missing";
let result = name ?? text;

console.log(result);

const car = { type: "fiat", model: "500", color: "white" };
console.log(car?.name);
console.log(car?.color);
