## Data Types

---

### Integers

- int, uint, uintptr (machine dependent)
- int8, int16, int32, int64
- uint8, uint16, uint32, uint64
- byte (alias for uint8)
- rune (alias for int32)

---

#### Max/Min Values

```golang
package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Printf("MaxInt64 = %v\\n", math.MaxInt64)
    fmt.Printf("MaxInt32 = %v\\n", math.MaxInt32)
    fmt.Printf("MaxInt16 = %v\\n", math.MaxInt16)

    fmt.Printf("MinInt64 = %v\\n", math.MinInt64)
    fmt.Printf("MinInt32 = %v\\n", math.MinInt32)
    fmt.Printf("MinInt16 = %v\\n", math.MinInt16)
}

// MaxInt64 = 9223372036854775807
// MaxInt32 = 2147483647
// MaxInt16 = 32767
// MinInt64 = -9223372036854775808
// MinInt32 = -2147483648
// MinInt16 = -32768

```

---

#### Generating a random number

```golang
package main

import {
    "fmt"
    "math/rand"
}

func main() {
    // generate a random number from 0 to 100
    randomNum := rand.Intn(100) + 1
}

```

---

### Floating Point Numbers

- float32
- float64

---

### Strings

```golang
package main

import "fmt"

func main() {
    // declare strings
    var hello string = "Hello"
    var world string = "World!"
    // string concatentation
    fmt.Println(hello + " " + world)
}

// Hello World!
```

---

### Booleans

- true
- false

---
