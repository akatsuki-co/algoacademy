import HelloWorld from "./HelloWorld"
import DataTypes from "./DataTypes"

const routes = [
  { path: "/python", exact: true, component: HelloWorld },
  { path: "/python/hello_world", exact: true, component: HelloWorld },
  { path: "/python/data_types", exact: false, component: DataTypes },
]

export default routes
