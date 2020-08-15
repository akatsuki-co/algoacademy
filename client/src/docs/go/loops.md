## Loops

---

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
    str := "algoacademy"

	// basic for loop
	for i := 0; i < len(str); i++ {
		fmt.Printf("%c ", str[i])
	}
	// a l g o a c a d e m y

	// while loop (use "for" syntax)
	var i int
	for i < len(str) {
		fmt.Print(string(str[i]) + " ")
		i++
	}
	// a l g o a c a d e m y

	// for range loop
	for index, val := range str {
		fmt.Println(string(val) + " is at index " + strconv.Itoa(index))
	}
	// a is at index 0
	// l is at index 1
	// g is at index 2
	// o is at index 3
	// a is at index 4
	// c is at index 5
	// a is at index 6
	// d is at index 7
	// e is at index 8
	// m is at index 9
	// y is at index 10
}
```

---

_Author: Tu Vo_
