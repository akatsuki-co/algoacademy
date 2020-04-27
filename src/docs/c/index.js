import React from "react"
import HelloWorld from "./HelloWorld"
import DataTypes from "./DataTypes"
import Looping from "./Looping"

const routes = [
  { path: "/c", exact: true, component: HelloWorld },
  { path: "/c/hello_world", exact: true, component: HelloWorld },
  { path: "/c/data_types", exact: true, component: DataTypes },
  { path: "/c/looping", exact: true, component: Looping },
  {
    path: "/c",
    exact: false,
    component: () => {
      return <h3>Nothing yet!</h3>
    },
  },
]

export default routes
