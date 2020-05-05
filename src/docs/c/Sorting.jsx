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
- Time complexity: O(n\\*\\*2)

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
- Time complexity: O(n\\*\\*2)

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
- Time complexity: O(n * log(n))

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

---

### Shellsort\n
- Time complexity: O(n * log(n))

---

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

---

### Counting Sort
- Time complexity: O(n + k) where n is the number of items and k is the number of possible values

---

\`\`\`c
int max(int *arr, int size)
{
    int i, max = 0;

	for (i = 0; i < size; i++)
		if (arr[i] > max)
			max = arr[i];
	return max;
}

void counting_sort(int *arr, int size)
{
	int i, num = 0, last, storage_size, counter = 0;
	int *storage;

	if (!arr || size < 2)
		return;
	storage_size = max(arr, size) + 1;
	storage = malloc(sizeof(int) * storage_size);
	for (i = 0; i < size; i++)
	{
		num = arr[i];
		storage[num] += 1;
	}
	for (i = 0; i < storage_size; i++)
	{
		last = (i == 0) ? 0 : storage[i - 1];
		storage[i] += last;
		while (storage[i] != counter)
			arr[counter++] = i;
	}
	free(storage);
}
\`\`\`

---

### Merge Sort
- Time complexity: O(n * log(n))

---

\`\`\`c
void merge(int *arr, int *inner, int start, int mid, int end)
{
	int i, j, k = 0;

	for (i = start, j = mid; i < mid && j < end; k++)
		if (arr[i] < arr[j])
			inner[k] = arr[i++];
		else
			inner[k] = arr[j++];
	while (i < mid)
		inner[k++] = arr[i++];
	while (j < end)
		inner[k++] = arr[j++];
	for (i = start, k = 0; i < end; i++)
		arr[i] = inner[k++];
}

void helper(int *arr, int *inner, int start, int end)
{
	int mid;

	if (end - start > 1)
	{
		mid = (end - start) / 2 + start;
		helper(arr, inner, start, mid);
		helper(arr, inner, mid, end);
		merge(arr, inner, start, mid, end);
	};
}

void merge_sort(int *arr, int size)
{
	int *inner;

	if (!arr || size < 2)
		return;
	inner = malloc(sizeof(int) * size);
	helper(arr, inner, 0, size);
	free(inner);
}
\`\`\`

---

### Heap Sort
- Time complexity: O(n * log(n))

---

\`\`\`c
void heapify(int *arr, int n, int i)
{
	int max = i, left = 2 * i, right = 2 * i + 1;

	if (left < n && arr[left] > arr[max])
		max = left;
	if (right < n && arr[right] > arr[max])
		max = right;
	if (max != i)
	{
		swap(&arr[i], &arr[max]);
		heapify(arr, n, max);
	}
}

void heap_sort(int *arr, int size)
{
	int i;

	for (i = size / 2 - 1; i >= 0; i--)
		heapify(arr, size, i);
	for (i = size - 1; i >= 0; i--)
	{
		swap(&arr[0], &arr[i]);
		heapify(arr, i, 0);
	}
}
\`\`\`

---

### Radix Sort
- Time complexity: O(k + n) where k is the key length and n is the number of keys

---

\`\`\`c
int max(int *arr, int size)
{
    int i, max = 0;

	for (i = 0; i < size; i++)
		if (arr[i] > max)
			max = arr[i];
	return max;
}

void helper(int *arr, int size, int divisor)
{
	int *output = malloc(sizeof(int) * size);
	int i, count[10] = {0};

	for (i = 0; i < size; i++)
		count[(arr[i] / divisor) % 10]++;
	for (i = 1; i < 10; i++)
		count[i] += count[i - 1];
	for (i = size - 1; i >= 0; i--)
	{
		output[count[(arr[i] / divisor) % 10] - 1] = arr[i];
		count[(arr[i] / divisor) % 10]--;
	}
	for (i = 0; i < size; i++)
		arr[i] = output[i];
	free(output);
}

void radix_sort(int *arr, int size)
{
	int i, max_num;

	if (!arr || size < 2)
		return;
	max_num = max(arr, size);
	for (i = 1; max_num / i > 0; i *= 10)
		helper(arr, size, i);
}
\`\`\`

---

_Author: Tu Vo_

`

const Sorting = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default Sorting
