import React from "react"
import HighlightedMarkdown from '../../components/HighlightedMarkdown'

const markdown = `\

## Data Types

---

### Numbers\n
- int
- unsigned int
- short int
- unsigned short int
- long int
- unsigned long int
- long long int
- unsigned long long int

---

#### Max/Min values

\`\`\`c
#include <stdio.h>
#include <limits.h>

int main()
{
    printf("INT_MAX = %i\\n", INT_MAX);
    printf("INT_MIN = %i\\n", INT_MIN);
    printf("LONG_MAX = %li\\n", LONG_MAX);
    printf("LONG_MIN = %li\\n", LONG_MIN);
    return 0;
}

// INT_MAX = 2147483647
// INT_MIN = -2147483648
// LONG_MAX = 9223372036854775807
// LONG_MIN = -9223372036854775808

\`\`\`

---

#### Generating a random number

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    // initialization, should only be called once
    srand(time(NULL));
    // returns a pseudo-random integer between 0 and RAND_MAX.
    int r = rand();
    printf("%i", r);
    return 0;
}
\`\`\`

---

#### Power and square root

\`\`\`c
#include <stdio.h>
#include <math.h>

int main()
{
    int i = 4;
    // Both pow and sqrt return floats
    printf("%i ^ 2 = %f\\n", i, pow(i, 2));
    printf("Square root of %i = %f\\n", i, sqrt(i) );
    return 0;
}

// 4 ^ 2 = 16.000000
// Square root of 4 = 2.000000
\`\`\`


---

### Floating Point Numbers\n
- float
- double

---

### Char
- 1 byte int

---

### Booleans\n
- if using \`<stdbool.h>\` library\n
  - true
  - false
- else\n
  - 1 (true)
  - 0 (false)

---

`

const DataTypes = () => {
  return (
  <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
  )
}

export default DataTypes
