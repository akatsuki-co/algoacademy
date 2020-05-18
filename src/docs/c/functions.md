## Functions

General format:

```txt
return_type name_of_function(function parameter(s))
{
    function body;
}
```

---

### A function to determine if an ASCII string has all unique characters

```c
#include <stdio.h>

int is_unique(char *str)
{
    unsigned int bit_map = 0;
    int val, i = 0;

    for (i = 0; str[i]; i++)
    {
        val = str[i] - 'a';
        if (bit_map & (1 << val))
            return 0;
        bit_map |= (1 << val);
    }
    return 1;
}

int main()
{
    printf("%i\n", is_unique("abcdef")); // 1
    printf("%i\n", is_unique("abcdea")); // 0
    return 0;
}

```

---

_Author: Tu Vo_
