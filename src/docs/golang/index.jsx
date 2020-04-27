import React from "react"
import HelloWorld from "./HelloWorld"
import DataTypes from "./DataTypes"

const routes = [
  { path: "/golang", exact: true, component: HelloWorld },
  { path: "/golang/hello_world", exact: true, component: HelloWorld },
  { path: "/golang/data_types", exact: true, component: DataTypes },
  {
    path: "/golang",
    exact: false,
    component: () => {
      return <h3>Nothing yet!</h3>
    },
  },
]

export default routes
