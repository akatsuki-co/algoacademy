import React from "react"
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `
## Structures

---

A structure is a data type that allows combined items of different data types.\n

---

### Initializing a struct

\`\`\`c
#include <stdio.h>

int main()
{
    struct date
    {
        int day;
        int month;
        int year;
    };

    struct date today;

    today.day = 27;
    today.month = 4;
    today.year = 2020;
    
    printf("Today's date is %i/%i/%i", today.month, today.day, today.year);
    return 0;
}

// Today's date is 4/27/2020

\`\`\`

---

_Author: Tu Vo_

`

const Structures = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default Structures
