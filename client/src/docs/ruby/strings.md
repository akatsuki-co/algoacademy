# Strings

---

## General

---

### String interpolation

---

```rb
name = "tu"
p "hello #{name}" # "hello tu"
```

---

### Multi-line strings

---

```rb
str = <<a
    Hello world.

    New lines will be preserved
a
p str
# "    Hello world.\n\n    New lines will be preserved\n"
```

---

### Indexes

- can use negative numbers to go backwards
- indexes out of range will return `nil`

---

```rb
str = "hello"
p str[0] # h
p str[-1] # o
p str[100] # nil
```

---

## Looping

---

### Each_char

---

```rb
str = "hello"
str.each_char do |char|
  p char
end
# "h"
# "e"
# "l"
# "l"
# "o"
```

---

### Chars

---

```rb
"hello".chars { |c| p c }
# "h"
# "e"
# "l"
# "l"
# "o"
```

---

## Methods

---

### Length

- `.length`

---

```rb
p "hello".length # 5
```

---

### Concat

- `.concat(str)`
- `+` also works
- `<<` also works

---

```rb
p "hello ".concat("world") # "hello world"
p "hello " + "world" # "hello world"
p "hello " << "world" # "hello world"
```

---

### Uppercase

- `.upcase`

---

```rb
p "hello".upcase # "HELLO"
```

---

### Lowercase

- `.downcase`

---

```rb
p "HELLO".downcase # "hello"
```

---

### Convert int to string

- `.to_i`

---

```rb
p "1".to_i # 1
```

---

### Slice

- `.slice(start_index, end_index)`
- can also use index syntax

---

```rb
p "hello".slice(0, 3) # "hel"
p "hello"[0, 3] # "hel"
p "hello"[0...3] # "hel"
```

---

### Capitalize

- `.capitalize`
- `.capitalize!` to mutate

---

```rb
p "hello".capitalize # "Hello"
```

---

### Reverse

- `.reverse`
- `.reverse!` to mutate

---

```rb
p "hello".reverse # "olleh"
```

---

### Include

- `.include?`
- can pass substring as argument

---

```rb
str = "hello"
p str.include?("h") # true
p str.include?("z") # false
p str.include?("ll") # true
```

---

### Empty and nil

- `.empty?`

---

```rb
p "".empty? # true
p "".nil? # false
```

---

- Use cases for `.nil?`:

---

```rb
p "hello"[100].nil? # true
```

---

### Split

- `.split(delimiter)`
- by default, it splits on spaces

---

```rb
str = "hello world my name is tu"
p str.split
# ["hello", "world", "my", "name", "is", "tu"]
```

---

### Count

- `.count(char(s))`

---

```rb
p "hello_world".count("l") # 3
p "hello_world".count("lo") # 4
```

---

### Index

- `.index(char)`

---

```rb
p "hello_world".index("_") # 5
```

---

### Insert

- `.insert(index, char(s))`

---

```rb
str = "hello"
str.insert(0, "z")
p str
# "zhello"
```

---

### Squeeze

- `.squeeze`
- removes all duplicate characters in a row

---

```rb
str = "aardvarkk"
p str.squeeze # "aardvarkk"
# "ardvark"
```

---

### Index

- `.index(char)`

---

```rb
p "hello_world".index("_") # 5
```

---

### Clear

- mutates string

---

```rb
str = "hello"
str.clear
p str # ""
```

---

### Delete

- `.delete(char)`
- deletes all instances of char

---

```rb
p "hello".delete("l") # "heo"
```

---

_Author: Tu Vo_
