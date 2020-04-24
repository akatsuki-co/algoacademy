import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `

# Hello World!

\`\`\`python
def hello_world():
    print('hello world')

# hello world
\`\`\`
`

const HelloWorld = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default HelloWorld
