import React from "react"
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `
## Pointers

---

A pointer is a variable that stores a memory address.\n
- The memory address is stored as a hexadecimal number.


\`\`\`c
#include <stdio.h>

int main()
{
    int i;
    int *p;

    i = 16;
    p = &i;
    printf("The address of %i is %p\\n", i, p);
    // Memory address will vary by machine
    return 0;
}

// The address of 16 is 0x7ffd9a1e1328
\`\`\`

---

Because pointers are just numbers, you can do arithmetric with them.



\`\`\`c
#include <stdio.h>

int _strlen(char *s)
{
	char *p = s;

	while (*s != '\0')
        s++;
    printf("s = %p, p = %p\\n", s, p);
	return (s - p);
}

int main()
{
    char *string = "studybuddy";
    printf("String size: %i\\n", _strlen(string));
    return 0;
}

// s = 0x40064f, p = 0x400645
// String size: 10

\`\`\`

---

_Author: Tu Vo_

`

const Pointers = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default Pointers
