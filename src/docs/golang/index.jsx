import React from "react"
import HelloWorld from "./HelloWorld"
import DataTypes from "./DataTypes"
import LinkedLists from "./LinkedLists"

const routes = [
  { path: "/golang", exact: true, component: HelloWorld },
  { path: "/golang/hello_world", exact: true, component: HelloWorld },
  { path: "/golang/data_types", exact: true, component: DataTypes },
  { path: "/golang/linked_lists", exact: true, component: LinkedLists },
  {
    path: "/golang",
    exact: false,
    component: () => {
      return <h3>Nothing yet!</h3>
    },
  },
]

export default routes
