import HelloWorld from "./HelloWorld"
import DataTypes from "./DataTypes"
import Lists from "./Lists"
import Dictionaries from "./Dictionaries"

const routes = [
  { path: "/python", exact: true, component: HelloWorld },
  { path: "/python/hello_world", exact: true, component: HelloWorld },
  { path: "/python/data_types", exact: false, component: DataTypes },
  { path: "/python/lists", exact: false, component: Lists },
  { path: "/python/dictionaries", exact: false, component: Dictionaries },
]

export default routes
