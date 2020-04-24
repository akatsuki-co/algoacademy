# Dev Notes

### Init

`npm install`

### Run dev server

`npm run dev`

### Dependencies

- react/react-dom - for React
- next - for Next framework
- react-bootstrap - CSS framework for React
- shortid - for generating unique keys
- swr (stale while revalidate) - for fetching data from apis, checks cache first
- react-router-dom - for routing
- @fortawesome/* - for font awesome icons
- @zeit/next-css - for custom css
- highlight.js - for embedding code snippets
- markdown-to-jsx - for converting markdown to jsx

### Folder Structure

- pages - where React page components go
  - index.js is root, e.g. "localhost:3000/"
  - python.js is "localhost:3000/python/"
  - api - internal api directory
    - python
      - index.js - where api calls to "localhost:3000/api/python/ goes to
- components - where React UI components go
- public - where static assets go
- utils - where utility functions to be shared across files go
- docs - where React markdown components go
- styles.css - global styles

### Bootstrap classes

- p[a-z][0-9] - padding
- m[a-z][0-9] - margin


