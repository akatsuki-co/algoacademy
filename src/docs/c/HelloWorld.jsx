import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `

# Hello World!

\`\`\`c
#include <stdio.h>

void hello_world()
{
    printf("hello world");
}

int main()
{
  hello_world();
  return 0;
}

\\\\ hello world
\`\`\`
`

const HelloWorld = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default HelloWorld
