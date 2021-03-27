# Arrays

---

## General

---

### Create a new array

- `Array.new(size, value)`
- ## Populates array with second argument as values

---

```rb
p Array.new(5) # [nil, nil, nil, nil, nil]
p Array.new(5, "hello") # ["hello", "hello", "hello", "hello", "hello"]
```

---

### Create a new array of strings

- no need for double quotes or commas

---

```rb
arr = %w[apple oranges pears]
p arr # ["apple", "oranges", "pears"]
```

---

### Indexes

---

```rb
arr = [4, 8, 15, 16, 23, 42]
p arr[1, 3] # [8, 15, 16]
p arr[1..3] # [8, 15, 16]
```

---

### Compare arrays

---

```rb
a = [1, 2, 3]
b = [1, 2, 3, 4]
c = [1, 2, 3]
p a == b # false
p a == c # true
```

---

### Check if object is an array

- `is_a?(Array)`

---

```rb
p [1, 2, 3].is_a?(Array) # true
```

---

## Methods

---

### Fetch

- Same as index
- Will throw error if index is out of bounds

---

```rb
arr = ["a", "b", "c"]
p arr.fetch(1) # "b"
```

---

### Values_at

- `.values_at(...)`

---

```rb
arr = [4, 8, 15, 16, 23, 42]
p arr.values_at(0, 3, 5) # [4, 16, 42]
```

---

### Count

- `.count`, same as `.length`
- `.count(value)`

---

```rb
arr = [1, 2, 3, 4, 4, 4, 5]
p arr.count # 7
p arr.count(4) # 3
```

---

### Empty and nil

---

- `.empty?`

```rb
p [].empty? # true
p [1, 2, 3][100].nil? # true
```

---

### Push

- `.push(value)`

---

```rb
arr = [1, 2, 3]
arr.push(4, 5)
p arr # [1, 2, 3, 4, 5]
```

---

- can also use shovel `<<`

---

```rb
arr = [1, 2, 3]
arr << 4
p arr # [1, 2, 3, 4]
```

---

### Insert

- `.insert(index, value)`

---

```rb
arr = [1, 2, 3, 4, 5]
arr.insert(2, 100)
p arr  # [1, 2, 100, 3, 4, 5]
```

---

### Pop

- `.pop`
- returns an array

---

```rb
arr = [1, 2, 3, 4, 5]
popped = arr.pop
p popped # [5]
```

---

### Shift and unshift

---

```rb
arr = [1, 2, 3, 4, 5]
shifted = a.shift
p shifted # 1
arr.unshift(100)
p a # [100, 2, 3, 4, 5]
```

---

## Looping

---

### Each

---

```rb
arr = ("a".."g").to_a
p arr.class # Array
p arr # ["a", "b", "c", "d", "e", "f", "g"]
arr.each do |letter|
  p letter
end
# "a"
# "b"
# "c"
# "d"
# "e"
# "f"
# "g"
```

---

### For loop

- not preferable in Ruby
- block variables persist once loop is over

---

```rb
arr = [1, 2, 3, 4, 5]
for num in arr
  p num
end
# 1
# 2
# 3
# 4
# 5
p num # 5
```

---

### Each\_with\_index

- `.each_with_index`

---

```rb
fives = [5, 10, 15, 20, 25]
fives.each_with_index do |num, index|p "#{index}: #{num}"
end
# "0: 5"
# "1: 10"
# "2: 15"
# "3: 20"
# "4: 25"
```

---

### Map and collect

- `.map`
- same thing

---

```rb
arr = [1, 2, 3]
squares = arr.map {|num| num ** 2}
p squares # [1, 4, 9]
```

---

### Reverse

- `.reverse`
- `.reverse!` to mutate

---

```rb
p [1, 2, 3, 4, 5].reverse # [5, 4, 3, 2, 1]
```

---

### Sort

- `.sort`
- `.sort!` to mutate

---

```rb
arr = [8, 4, 6, 3, 7, 2, 9, 1, 0, 5]
p arr.sort # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---

- for descending order, combine with `reverse`:

---

```rb
arr = [8, 4, 6, 3, 7, 2, 9, 1, 0, 5]
p arr.sort.reverse
# [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

---

### Concat

- `.concat(array)`
- mutates original array

---

```rb
a = [1, 2, 3]
b = [4, 5, 6]
a.concat(b)
p a # [1, 2, 3, 4, 5, 6]
```

---

### Min and max

- `.min` and `.max`

---

```rb
arr = [4, 8, 15, 16, 23, 42]
p arr.min # 4
p arr.max # 42
```

---

### Include

- `.include?`

---

```rb
p [1, 2, 3, 4, 5].include?(3) # true
```

---

### Index and find_index

- same thing
- `.find(value)`
- returns index of argument if it exists in array, else nil

---

```rb
arr = [1, 2, 3]
p arr.index(2) # 1
p arr.index(100) # nil
```

---

### Select

- filters values that pass predicate

---

```rb
grades = [45, 14, 76, 33, 64, 88]
pass = grades.select do |n|
  n >= 75
end
p pass # [76, 88]
```

---

### Reject

- filters values that do not pass predicate

---

```rb
grades = [45, 14, 76, 33, 64, 88]
no_pass = grades.select { |n| n <= 75 }
p no_pass # [45, 14, 33, 64]
```

---

### Partition

- returns an array of arrays

---

```rb
grades = [45, 14, 76, 33, 64, 88]
even, odd = grades.partition { |n| n.even? }
p even, odd
# [14, 76, 64, 88]
# [45, 33]
```

---

### Join

- `.join` or `.join(delimiter)`

---

```rb
arr = ["a", "b", "c"]
p arr.join
# "abc"
```

---

### Dup

- `.dup`
- duplicates array with different memory address

---

```rb
a = [4, 5, 6]
b = a.dup

p a.object_id # 100
p b.object_id # 120

a.push(100)
p a # [4, 5, 6, 100]
p b # [4, 5, 6]
```

---

### Any and all

- `.any?` - returns true if one element matches predicate
- `.all?` - returns true if all elements match predicate

---

```rb
arr = [4, 8, 15, 16, 23, 42]
p a.any? { |n| n.even? } # true
p a.all? { |n| n.even? } # false
```

---

### Find and detect

- `.find`
- finds **first** instance of predicate

---

```rb
words = ["a", "bb", "ccc", "dd"]
p words.find { |w| w.length == 2 } # "bb"
```

---

### Uniq

- `.uniq`
- removes duplicates

---

```rb
arr = [1, 2, 3, 1, 1, 3]
p arr.uniq # [1, 2, 3]
```

---

### Compact

- `.compact`
- removes nil values

---

```rb
arr = [1, 2, nil, 3, 4, 5]
p arr.compact # [1, 2, 3, 4, 5]
```

---

### Reduce

- `.reduce(start)`

---

```rb
res = [1, 2, 3, 4, 5].reduce(0) do |prev, curr|
  prev + curr
end
p res # 15
```

---

### Flatten

- `.flatten`
- deep flattens

---

```rb
arr = [[1, 2, 3], [4, 5, 6, [7, 8]]]
p arr.flatten # [1, 2, 3, 4, 5, 6, 7, 8]
```

---

### Zip

- `.zip(array)`
- returns array of arrays

---

```rb
a, b = [1, 2, 3], [4, 5, 6]
p a.zip(b) # [[1, 4], [2, 5], [3, 6]]
```

---

### Sample

- `.sample` or `.sample(num)`

---

```rb
arr = [1, 2, 3, 4, 5]
p arr.sample # 5
p arr.sample(2) # [1, 5]
```

---

## Arithmetic

---

### Multiplication

---

```rb
p [1, 2, 3] * 2 # [1, 2, 3, 1, 2, 3]
```

---

### Subtraction

- remove array elements that exist in another array

---

```rb
a = [1, 2, 3, 4, 5, 6, 6]
p a - [2, 6] # [1, 3, 4, 5]
```

---

### Union

- combines arrays and excludes duplicates

---

```rb
a = [1, 2, 3, 4]
b = [3, 4, 5]
p a | b # [1, 2, 3, 4, 5]
```

---

### Intersection

- Creates new array that has elements that exist in both arrays

---

```rb
a = [1, 2, 3, 4]
b = [3, 4, 5]
p a & b # [3, 4]
```

---

_Author: Tu Vo_
