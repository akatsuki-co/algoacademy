## Arrays

---

An array is a variable that can store multiple values of the same data type.

- The data is ordered and contiguous in memory.

---

### Initializing an array

- For arrays on the stack, array sizes have to be defined at compile time.
- For variable-sized arrays, user must allocate memory on the heap using malloc, calloc...

---

```c
#include <stdio.h>

int main()
{
    int i;

    // an array of 10 integers, will contain garbage values
    int values[10];
    for (i = 0; i < 10; i++)
    {
        printf("%i ", values[i]);
        // 1680083360 32674 0 0 4195824 0 4195408 0 -1894938208 32765
    }

    // an array of 10 predetermined numbers
    int numbers[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
    for (i = 0; i < 10; i++)
    {
        printf("%i ", numbers[i]);
        // 0 0 0 0 0 0 0 0 0 0
    }
    return 0;
}
```

---

**Interview Question**

### Calculate (n) fibonacci numbers

- Use memoization with arrays.

---

```c
#include <stdio.h>

int main()
{
    int fibo[15], i;

    fibo[0] = 0;
    fibo[1] = 1;
    for (i = 2; i < 15; i++)
    {
        fibo[i] = fibo[i - 2] + fibo[i - 1];
    }

    for (i = 0; i < 15; i++)
    {
        printf("%i ", fibo[i]);
    }
    return 0;
}

// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377

```

---

_Author: Tu Vo_
