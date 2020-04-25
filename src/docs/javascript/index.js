import HelloWorld from "./HelloWorld"

const routes = [
    { path: "/javascript", exact: true, component: HelloWorld },
    { path: "/javascript/hello_world", exact: true, component: HelloWorld },
  ]
  
export default routes