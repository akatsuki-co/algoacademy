import HelloWorld from "./HelloWorld"
import DataTypes from "./DataTypes"
import Example from "./Example"

const routes = [
  { path: "/python", exact: true, component: HelloWorld },
  { path: "/python/hello_world", exact: true, component: HelloWorld },
  { path: "/python/data_types", exact: false, component: DataTypes },
  { path: "/python/example", exact: false, component: Example },
]

export default routes
