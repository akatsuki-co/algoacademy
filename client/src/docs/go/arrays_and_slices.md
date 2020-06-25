## Arrays

---

An array is a data structure that can store multiple values of the same data type.

- The data is ordered, indexed from 0 and contiguous in memory.
- Arrays in Go are fixed in size.

---

### Initializing an array

- Syntax is `[(size of array)](data type){initial values}`

---

```go
a := [3]int{1, 2, 3}

// Alternate syntax
b := [...]int{1, 2, 3}
fmt.Println(a) // [1 2 3]
fmt.Println(b) // [1 2 3]
```

---

### Copying an array

- When you assign an array to another value, it creates another copy. They do not reference the same object.
- If you need to reference the same data structure, you can use pointers.

---

```go

a := [...]int{1, 2, 3}
b := a
b[1] = 9
fmt.Println(a) // [1 2 3]
fmt.Println(b) // [1 9 3]

c := [...]int{1, 2, 3}
d := &c
d[1] = 9
fmt.Println(c) // [1 9 3]
fmt.Println(d) // [1 9 3]
```

---

## Slices

Slices are much more commonly seen in Go than arrays. They are like arrays, except the size of slices can grow and shrink.

---

### Initializing an slice

- Syntax is `[](data type){initial values}`. The only difference between this and an array is you omit the size of the slice between the first brackets.
- Alternatively, you can also use the builtin `make` to initialize slices.
- Syntax is `make([](data type), (initial size of slice), optional=(initial capacity of slice))`

```go

a := []int{1, 2, 3}
fmt.Println(a) // [1 2 3]

// make syntax
b := make([]int, 3)
fmt.Println(b) // [0, 0, 0]
```

---

### Len vs Capacity

- A slice has both a length and a capacity.
- The length of a slice is the number of elements it contains.
- The capacity of a slice is the number of elements in the underlying array, counting from the first element in the slice.
- Slices will resize the underlying array for you when you hit capacity.

---

```go
s := make([]int, 0, 3) // create an empty array with a initial capacity of 3
fmt.Println(s) // []
fmt.Printf("cap %v, len %v, %p\n", cap(s), len(s), s)
// cap 3, len 0, 0xc0000be020

for i := 0; i < 5; i++ {
    s = append(s, i)
    fmt.Printf("cap %v, len %v, %p\n", cap(s), len(s), s)
}
// cap 3, len 1, 0xc0000be020
// cap 3, len 2, 0xc0000be020
// cap 3, len 3, 0xc0000be020
// cap 6, len 4, 0xc0000b2060 -> notice the memory address has changed
// cap 6, len 5, 0xc0000b2060

```

---

### Copying a slice

- Use the builtin `copy`.
- `copy` will only copy the minimum length of elements of the two slices.

---

```go
a := []int{1, 2, 3}
b := a // still references same object!
b[1] = 9
fmt.Println(a) // [1 9 3]
fmt.Println(b) // [1 9 3]

source := []int{1, 2, 3}
dest := make([]int, 3)
copy(dest, source)
source[1] = 9
fmt.Println(source) // [1 9 3]
fmt.Println(dest) // [1 2 3]
```

---

### Adding elements to a slice

- Use the builtin `append`.
- `append` returns a new slice so make sure you assign it somewhere. This is very different from most other programming languages.

---

```go
a:= make([]int, 3)
fmt.Println(a) // [0 0 0]

a = append(a, 1)
fmt.Println(a) // [0, 0, 0, 1]
fmt.Printf("len: %v, cap: %v\n", len(a), cap(a)) // len: 4, cap: 6

// append can handle variadic arguments
a = append(a, 2, 3, 4, 5)
fmt.Println(a) // [0, 0, 0, 1, 2, 3, 4, 5]
fmt.Printf("len: %v, cap: %v\n", len(a), cap(a)) // len: 8, cap: 12

// using spread operator
a = append(a, []int{6, 7, 8}...)
fmt.Println(a) // [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8]
fmt.Printf("len: %v, cap: %v\n", len(a), cap(a)) // len: 11, cap: 12

```

---

### Deleting elements in a slice

---

```go
// Removing first element
a:=[]int{1, 2, 3, 4, 5}
a = a[1:]
fmt.Println(a) // [2 3 4 5]

// Removing last element
a = a[:len(a)-1]
fmt.Println(a) // [2 3 4]

// removing things in middle, very dangerous because of data mutation to
// original slice
b :=[]int{1, 2, 3, 4, 5}
b = append(b[:2], b[3:]...)
fmt.Println(b) // [1 2 4 5]
```

---


_Author: Tu Vo_
