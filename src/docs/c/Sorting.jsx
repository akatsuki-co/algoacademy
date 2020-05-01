import React from "react"
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `
## Sorting

---

### Define a swap function

---

\`\`\`c
void swap(int *a, int *b)
{
	int tmp = *a;
	*a = *b;
	*b = tmp;
}
\`\`\`

---

### Bubble Sort\n
- Runtime: O(n\\*\\*2)

---

\`\`\`c
void bubble_sort(int *arr, int size)
{
	int i, repeat = 1;

	if (!arr || size < 2)
		return;
	while (repeat)
	{
		repeat = 0;
		for (i = 0; i < size - 1; i++)
		{
			if (arr[i] > arr[i + 1])
			{
				swap(&arr[i], &arr[i + 1]);
				repeat = 1;
			}
		}
	}
}

\`\`\`

---

### Insertion Sort\n
- Runtime: O(n\\*\\*2)

---

\`\`\`c
void insertion_sort(int *arr, int size)
{
    int i, j, key;

    for (i = 1; i < size; i++)
    {
        key = arr[i];
        j = i - 1;
        while (key < arr[j] && j >= 0)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
\`\`\`

---

### Quicksort\n
- Runtime: O(n * log(n))

---

\`\`\`c
int partition(int *arr, int low, int high)
{
    // using the last element as the pivot
    int pivot = arr[high], i = low - 1, j;

    for (j = low; j < high; j++)
        if (arr[j] <= pivot)
        {
            i++;
            if (i != j)
                swap(&arr[i], &arr[j]);
        }
    if ((i + 1) != high)
        swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quick_sort(int arr[], int low, int high, int size)
{
    int p;
    if (!arr || size < 2)
        return;

    if (low < high)
    {
        p = partition(arr, low, high);
        quick_sort(arr, low, p - 1, size);
        quick_sort(arr, p + 1, high, size);
    }
}
\`\`\`

### Shellsort\n

\`\`\`c
void shell_sort(int *arr, int size)
{
	int inner, outer, interval = 1, val;
	if (!arr || size < 2)
		return;

    // using knuth's sequence
	while (interval <= size / 3)
		interval = interval * 3 + 1;
	while (interval)
	{
		for (outer = interval; outer < size; outer++)
		{
			val = arr[outer];
			inner = outer;
			while (inner > interval - 1 && arr[inner - interval] >= val)
			{
				arr[inner] = arr[inner - interval];
				inner -= interval;
			}
			arr[inner] = val;
		}
		interval = (interval - 1) / 3;
	}
}
\`\`\`

_Author: Tu Vo_

`

const Sorting = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default Sorting

