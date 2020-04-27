import React from "react"
import HelloWorld from "./HelloWorld"
import DataTypes from "./DataTypes"
import Looping from "./Looping"
import Arrays from "./Arrays"
import Functions from "./Functions"
import Structures from "./Structures"

const routes = [
  { path: "/c", exact: true, component: HelloWorld },
  { path: "/c/hello_world", exact: true, component: HelloWorld },
  { path: "/c/data_types", exact: true, component: DataTypes },
  { path: "/c/looping", exact: true, component: Looping },
  { path: "/c/arrays", exact: true, component: Arrays },
  { path: "/c/functions", exact: true, component: Functions },
  { path: "/c/structures", exact: true, component: Structures },
  {
    path: "/c",
    exact: false,
    component: () => {
      return <h3>Nothing yet!</h3>
    },
  },
]

export default routes
