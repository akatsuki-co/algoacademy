import HelloWorld from "./HelloWorld"
import DataTypes from "./DataTypes"
import Lists from "./Lists"

const routes = [
  { path: "/python", exact: true, component: HelloWorld },
  { path: "/python/hello_world", exact: true, component: HelloWorld },
  { path: "/python/data_types", exact: false, component: DataTypes },
  { path: "/python/lists", exact: false, component: Lists },
]

export default routes
