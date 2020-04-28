# Dev Notes

### Init

`npm install`

### Run dev server

`npm start`

### Dependencies

- react/react-dom - for React
- react-bootstrap - for CSS
- shortid - for generating unique keys
- react-router-dom - for routing
- @fortawesome/* - for social media icons
- highlight.js - for embedding code snippets
- markdown-to-jsx - for converting markdown to jsx

### Folder Structure

- public - static assets
- src/app.js - app entry point
- src/pages - page components
- src/components - ui components
- utils - utility functions shared across files
- docs - markdown components


### Bootstrap classes

- p[a-z][0-9] - padding
- m[a-z][0-9] - margin


### How to change menu/submenu

- Edit tableOfContents string in pages/{language}.jsx


### How to add a document

- Create component in /docs/{language}/{lesson}.jsx
- Add path in /docs/{language}/index.jsx

