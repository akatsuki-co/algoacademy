# Numbers

---

## Arithmetic

---

### Addition

---

```rb
p 1 + 2 # 3
# Behind the scenes, it is calling:
p 1.+(2) # 3
```

---

### Division

- Integer division

---

```rb
p 10 / 3 # 3
```

---

- For regular division, convert one of the numbers to a float

---

```rb
p 10.0 / 3 # 3.3333333333333335
```

---

### Power

---

```rb
p 2**3 # 8
```

---

### Modulo

```rb
p 10 % 3 # 1
```

---

## Methods

---

### Next

- `.next`
- does not mutate

---

```rb
a = 1
p a.next # 2
p a # 1
```

---

### Convert int to string

- `.to_s`

---

```rb
p 1.to_s # "1"
```

---

### Convert int to float

- `.to_f`

---

```rb
p 1.to_f # 1.0
```

---

### Even/Odd

- For even, `.even?`

---

```rb
p 2.even? # true
```

---

- For odd, `.odd?`

---

```rb
p 2.odd? # false
```

---

### Between

- `.between?(min, max)`
- pass in range as arguments
- inclusive

---

```rb
p 5.between?(1, 10) # true
p 1.between?(1, 5) # true
p 5.between?(1, 5) # true
```

---

### Times

- repeats an expression

---

```rb
3.times { puts "hello" }
# hello
# hello
# hello

3.times do
  puts "hello"
end
# hello
# hello
# hello
```

---

- with block variables

---

```rb
3.times do |index|
  puts "index: #{index}"
end
# index: 0
# index: 1
# index: 2
```

---

### Downto

- `.downto(num)`
- inclusive

---

```rb
5.downto(1) { |i| p "i = #{i}" }
# i = 5
# i = 4
# i = 3
# i = 2
# i = 1
```

---

### Step

- `.step(max, step)`

---

```rb
1.step(20, 5) { |i| p "i = #{i}" }
# i = 1
# i = 6
# i = 11
# i = 16
```

---

_Author: Tu Vo_
