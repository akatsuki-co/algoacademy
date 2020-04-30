import React from "react"
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `
## Bit Manipulation

---

### Print a number in binary

---

\`\`\`c
#include <stdio.h>

void print_binary(unsigned long int n)
{
    int bits, first_one = 0;

	if (!n)
	{
		putchar('0');
		return;
	}
	for (bits = sizeof(n) * 8 - 1; bits >= 0; bits--)
	{
		if ((n >> bits) & 1)
		{
			first_one = 1;
			putchar('1');
		} else if (first_one)
			putchar('0');
	}
}

int main()
{
    print_binary(3); // 11
    print_binary(16); // 10000
    return 0;
}
\`\`\`

---

---

_Author: Tu Vo_

`

const BitManipulation = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default BitManipulation
