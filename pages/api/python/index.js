const tableOfContents = {
  language: "python",
  sidebar: [
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
      menu: "Intermediate",
      subMenu: ["Builtins", "Data Structures", "Basic Algorithms"],
    },
    {
      menu: "Advanced",
      subMenu: ["Sorting", "Advanced Data Structures", "Big O"],
    },
  ],
}

export default (req, res) => {
  res.status(200).json(tableOfContents)
}
