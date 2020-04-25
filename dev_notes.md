# Dev Notes

4/25/20 - Tu
I've the decision to migrate from nextJS to create-react-app. In the little time I spent with nextJS, I was unable to get the app working as a SPA. Because it is rendered server side, using react-router was causing a lot of problems. Also, I feel not using a framework will be better for a learning environment since our team is relatively new to react. We can spend more time focusing on hooks and writing good react code than trying to optimize for speed within the bounds of a framework.

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


