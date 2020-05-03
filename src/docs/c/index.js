import React from "react"
import HelloWorld from "./HelloWorld"
import DataTypes from "./DataTypes"
import Looping from "./Looping"
import Arrays from "./Arrays"
import Functions from "./Functions"
import Structures from "./Structures"
import LinkedLists from "./LinkedLists"
import Pointers from "./Pointers"
import Stacks from "./Stacks"
import Queues from "./Queues"
import BitManipulation from "./BitManipulation"
import Sorting from "./Sorting"
import HashTables from "./HashTables"

const routes = [
  { path: "/c", exact: true, component: HelloWorld },
  { path: "/c/hello_world", exact: true, component: HelloWorld },
  { path: "/c/data_types", exact: true, component: DataTypes },
  { path: "/c/looping", exact: true, component: Looping },
  { path: "/c/arrays", exact: true, component: Arrays },
  { path: "/c/functions", exact: true, component: Functions },
  { path: "/c/structures", exact: true, component: Structures },
  { path: "/c/linked_lists", exact: true, component: LinkedLists },
  { path: "/c/pointers", exact: true, component: Pointers },
  { path: "/c/stacks", exact: true, component: Stacks },
  { path: "/c/queues", exact: true, component: Queues },
  { path: "/c/bit_manipulation", exact: true, component: BitManipulation },
  { path: "/c/sorting", exact: true, component: Sorting },
  { path: "/c/hash_tables", exact: true, component: HashTables },
  {
    path: "/c",
    exact: false,
    component: () => {
      return <h3>Nothing yet!</h3>
    },
  },
]

export default routes
