import React from 'react'
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `

## Hello World!

---

Quick facts about C++:\n
- Statically typed
- Compiled
- No garbage collection
- Supports object-oriented programming

---

\`\`\`cpp
#include <iostream>

int main()
{
    std::cout << "Hello World!\\n";
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
