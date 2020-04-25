import HelloWorld from "./HelloWorld"

const routes = [
    { path: "/c++", exact: true, component: HelloWorld },
    { path: "/c++/hello_world", exact: true, component: HelloWorld },
  ]
  
export default routes