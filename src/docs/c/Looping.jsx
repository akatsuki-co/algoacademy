import React from "react"
import HighlightedMarkdown from '../../components/HighlightedMarkdown'

const markdown = `\

## Looping

---

### For Loop\n

General format:

\`\`\`txt
for ( init_expression; loop_condition; loop_expression )
    program statement (or statements)
\`\`\`

---

\`\`\`c
#include <stdio.h>

int main()
{
    int i;

    for (i = 0; i < 5; i++)
    {
        printf("%i ", i); // 0 1 2 3 4
    }
    return 0;
}

\`\`\`

---

### While Loop\n

\`\`\`txt
while ( expression )
    program statement (or statements)
\`\`\`

---

\`\`\`c
#include <stdio.h>

int main()
{
    int i = 0;

    while (i != 5)
    {
        printf("%i ", i); // 0 1 2 3 4
        i++;
    }
    return 0;
}

\`\`\`

---

`

const DataTypes = () => {
  return (
  <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
  )
}

export default DataTypes
