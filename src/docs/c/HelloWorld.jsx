import React from "react"
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `

## Hello World!

---

##### Quick facts about C:\n
- Statically typed
- Compiled
- Manual memory management (no garbage collection)

---

\`\`\`c
#include <stdio.h>

int main()
{
    printf("Hello World!\\n");
    return 0;
}

\\\\ Hello World!

\`\`\`

---

`

const HelloWorld = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default HelloWorld
