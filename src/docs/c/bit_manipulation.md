## Bit Manipulation

---

### Print a number in binary

---

```c
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
    print_binary(~0); // 1111111111111111111111111111111111111111111111111111111111111111
    return 0;
}
```

---

### Get the bit at a given index

---

```c
int get_bit(unsigned long int n, unsigned int index)
{
	if (index > sizeof(n) * 8 - 1)
		exit(1)
	return ((n >> index) & 1);
}
```

---

### Set the bit at a given index to 1

---

```c
void set_bit(unsigned long int *n, unsigned int index)
{
	if (index > sizeof(index) * 8 - 1)
		exit(1);
	*n |= 1 << index;
}
```

---

### Clear the bit at a given index

```c
void clear_bit(unsigned long int *n, unsigned int index)
{
	if (index > sizeof(n) * 8 - 1)
		exit(1)
	*n &= ~(1UL << index);
}
```

---

**Interview Question**

### Determine the number of bits you would need to flip to get from one number to another

---

```c
unsigned int flip_bits(unsigned long int n, unsigned long int m)
{
	unsigned int res = 0;

	for (n = n ^ m; n; n >>= 1)
		if (n & 1)
			res++;
	return res;
}

int main()
{
    // 4 = 0b100, 3 = 0b11
    printf("%i", flip_bits(4, 3)); // 3
    return 0;
}
```

---

**Interview Question**

### Determine if a number is a power of two in constant time

---

```c
int is_power_of_two(unsigned int n)
{
    return n && !(n & (n - 1));
}
```

---

_Author: Tu Vo_
