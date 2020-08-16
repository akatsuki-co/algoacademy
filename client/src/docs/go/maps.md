## Maps

---

A map is a data structure that "maps" keys to values, much like a hash table.

---

```go
package main

import "fmt"

func main() {

	// initialize map
	// To create an empty map, use the builtin make: make(map[key-type]val-type).
	str := "algoacademy"
	counter := make(map[rune]int)
	for _, val := range str {
		// check if a value is in map
        // first var is val if it exists
        // second var is boolean if it exists
		_, ok := counter[val]
		if ok {
			counter[val]++
		} else {
			counter[val] = 1
		}
    }

    fmt.Println(counter)
    // // map[97:3 99:1 100:1 101:1 103:1 108:1 109:1 111:1 121:1]
	// notice characters are in their numerical ASCII value

    // loop through map, use range
	for k, v := range counter {
		fmt.Printf("%c - %d\n", k, v)
	}
	// e - 1
	// m - 1
	// y - 1
	// a - 3
	// o - 1
	// c - 1
	// d - 1
	// l - 1
	// g - 1

	// remove key
	delete(counter, 'a')

    // check if val exists
	_, ok := counter['a']
	fmt.Println(ok) // false
}
```

---

_Author: Tu Vo_
