# Adding fonts to React Project

- There are two popular ways to add fonts in React:

  - Offline font file from our system
  - Font by CDN link (My favorite)

- Here are some websites for use fonts for FREE:
  - google fonts
  - font squirrel

## Adding fonts online

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

## Adding fonts offline

1. go to `https://fonts.google.com/specimen/Montserrat` and download the font family.
2. Unzip it locally.
3. Go to `https://cloudconvert.com/ttf-to-woff2` upload the desired font to convert from ttf to woff2
4. Download the woff2 converted fonts
5. Create a new folder `fonts` under `assets` folder and copy the font file to this new folder.
6. In `index.css` file add the font

```javascript
// index.css

@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat.woff2");
}

* {
  margin: 0;
  padding: 0;
  block-size: border-box;
}

body {
  background-color: #101010;
  color: #fff;
  font-family: "Montserrat", sans-serif;
}

```
