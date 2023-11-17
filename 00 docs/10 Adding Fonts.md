# Adding fonts to React Project

- There are two popular ways to add fonts in React:

  - Offline font file from our system
  - Font by CDN link (My favorite)

- Here are some websites for use fonts for FREE:
  - google fonts
  - font squirrel

Go to https://fonts.google.com/specimen/Montserrat and select the desired fonts and add them to css file

```javascript
// index.css

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
}


```
