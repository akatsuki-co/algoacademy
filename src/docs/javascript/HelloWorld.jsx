import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `

# Hello World!

\`\`\`js
function helloWorld() {
    console.log("hello world")
}

\\\\ hello world
\`\`\`
`

const HelloWorld = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default HelloWorld
