## Sets

---

A set is a data structure that maps keys to values, similarly to a hash table. The difference is that the values in a set can either be true or false.

In Go, sets can be created using hash maps.

---

### Initialize a set

---

```go
type Set struct {
    items map[int]bool
    size int
}

func Constructor() Set {
    return Set{make(map[int]bool), 0}
}

func main() {
  s := Constructor()
  fmt.Println(s) // {map[] 0}
}
```

---

### Check if set has a value

- Runtime: O(1)

---

```go
func (this *Set) Has(val int) bool {
    _, ok := this.items[val]
    if ok {
        return true
    }
    return false
}

func main() {
    s := Constructor()
    fmt.Println(s.Has(5)) // false
}
```

---

### Add a key

- Runtime: O(1)

---

```go
func (this *Set) Add(val int) {
    if !this.Has(val) {
        this.items[val] = true
        this.size++
    }
}

func main() {
    s := Constructor()
    s.Add(1)
    s.Add(5)
    s.Add(10)
    fmt.Println(s) // {map[1:true 5:true 10:true] 3}
}
```

---

### Remove a key

- Runtime: O(1)

---

```go
func (this *Set) Remove(val int) {
    if this.Has(val) {
        delete(this.items, val)
        this.size--
    }
}

func main() {
    s := Constructor()
    s.Add(1)
    s.Add(5)
    s.Remove(1)
    fmt.Println(s) // {map[5:true] 1}
}
```

---

### Looping over a set

- Use `for range` loop through inner map.

---

```go
    s := Constructor()
    fmt.Println(s.Has(5))
    s.Add(1)
    s.Add(5)
    s.Add(10)
    fmt.Println(s)
    for val := range(s.items) {
        fmt.Println(val)
    } // 1 5 10
```

---

_Author: Tu Vo_
