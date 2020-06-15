## Searching

---

### Linear Search

---

```c
int linear_search(int *array, unsigned int size, int value)
{
	unsigned int i;

	if (!array)
		return -1;
	for (i = 0; i < size; i++)
	{
		if (array[i] == value)
			return i;
	}
	return -1;
}
```

---

### Binary Search

---

```c
int binary_search(int *array, unsigned int size, int value)
{
	unsigned int mid, start, end;

	if (!array)
		return -1;
	start = 0;
	end = size - 1;
	while (start <= end)
	{
		mid = (start + end) / 2;
		if (value > array[mid])
			start = mid + 1;
		else if (value < array[mid])
			end = mid - 1;
		else
			return mid;
	}
	return -1;
}
```

---

_Author: Tu Vo_
