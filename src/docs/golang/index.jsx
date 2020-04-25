import HelloWorld from "./HelloWorld"

const routes = [
  { path: "/golang", exact: true, component: HelloWorld },
  { path: "/golang/hello_world", exact: true, component: HelloWorld },
]

export default routes
