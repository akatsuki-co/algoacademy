const tableOfContents = [
  {
    menu: "Getting Started",
    subMenu: [
      "Hello World",
      "Data Types",
      "Basic Syntax",
      "Constants",
      "Example",
    ],
  },
  {
    menu: "Data Structures",
    subMenu: ["Builtins", "Data Structures", "Basic Algorithms"],
  },
  {
    menu: "Algorithms",
    subMenu: ["Promises", "Advanced Data Structures", "Big O"],
  },
]

export default (req, res) => {
  res.status(200).json(tableOfContents)
}
