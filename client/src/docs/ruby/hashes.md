# Hashes

---

## General

---

### Create a new Hash

---

```rb
h = {}
p h.class # Hash
```

---

- Create hash with values:

---

```rb
# First way
h = {
  "a" => "1",
  "b" => "2"
}
p h # {"a"=>"1", "b"=>"2"}
p h["a"] # "1"

# Second way
h = {
  :a => "1",
  :b => "2"
}
p h # {:a=>"1", :b=>"2"}

# Third way
h = {
  a: "1",
  b: "2"
}
p h # {:a=>"1", :b=>"2"}
```

---

### Create Hash with default value

- you can reset default value with `.default(value)`

---

```rb
h = Hash.new(0)
h[:a] = 1
h[:b] = 2

p h[:c] # 0

h.default = -1
p h[:c] # -1
```

---

### Convert Hash to Array and vice-versa

---

```rb
h = {
  "a" => "1",
  "b" => "2",
  "c" => "3"
}
p h.to_a # [["a", "1"], ["b", "2"], ["c", "3"]]
p h.to_a.flatten # ["a", "1", "b", "2", "c", "3"]

arr = [["a", "1"], ["b", "2"], ["c", "3"]]
p arr.to_h # {"a"=>"1", "b"=>"2", "c"=>"3"}
```

---

### Hashes as method arguments

---

```rb
def calculate_total(info)
  tax_amount = info[:price] * info[:tax]
  tip_amount = info[:price] * info[:tip]
  info[:price] + tax_amount + tip_amount
end

bill = {tip: 0.18, tax: 0.07, price: 24.99}
p calculate_total(bill) # 31.2375

# also works:
p calculate_total({tip: 0.18, tax: 0.07, price: 24.99}) # 31.2375

# also works:
p calculate_total(tip: 0.18, tax: 0.07, price: 24.99) # 31.2375
```

---

## Looping

---

### Each, each\_key, each\_value

---

```rb
capitals = {
  Alabama: "Montgomery",
  Alaska: "Juneau",
  Arizona: "Phoenix"
}

capitals.each do |key, val|
  p "The capital of #{key} is #{val}"
end
# "The capital of Alabama is Montgomery"
# "The capital of Alaska is Juneau"
# "The capital of Arizona is Phoenix"

capitals.each_key do |key|
  p "#{key}"
end
# "Alabama"
# "Alaska"
# "Arizona"

capitals.each_value do |val|
  p "#{val}"
end
# "Montgomery"
# "Juneau"
# "Phoenix"
```

---

## Methods

---

### Fetch

- `.fetch(key)`
- will throw error if key is not found
- `.fetch(key, default value if key not found)`

---

```rb
h = {
  a: "1",
  b: "2"
}
p h.fetch(:a) # 1
p h.fetch(:c, 100) # 100
p h.fetch(:c) # `fetch': key not found: :c (KeyError)

# Bracket notation
p h[:c] # nil
```

---

### Store

- same as get
- bracket notation works

---

```rb
h = {
  a: "1",
  b: "2"
}
h[:c] = "3"
p h # {:a=>"1", :b=>"2", :c=>"3"}

h.store(:d, "4")
p h # {:a=>"1", :b=>"2", :c=>"3", :d=>"4"}
```

---

### Length and empty

- `.length`
- `.empty?`

---

```rb
h = {
  a: "1",
  b: "2"
}
p h.length # 2
p h.empty?
```

---

### Keys and values

- `.keys` and `.values`
- returns array

---

```rb
capitals = {
    Alabama: "Montgomery",
    Alaska: "Juneau",
    Arizona: "Phoenix"
}
p capitals.keys # [:Alabama, :Alaska, :Arizona]
p capitals.values # ["Montgomery", "Juneau", "Phoenix"]
```

---

### Sort

- `.sort`
- sorts keys in alphabetical order
- returns array

---

```rb
pokemon = {
  :squirtle => "water",
  :bulbasaur => "grass",
  :charizard => "fire"
}
p pokemon.sort #  [[:bulbasaur, "grass"], [:charizard, "fire"], [:squirtle, "water"]]

# to sort by values:
p pokemon.sort_by { |pokemon, type | type }
# [[:charizard, "fire"], [:bulbasaur, "grass"], [:squirtle, "water"]]
```

---

### Key? and value?

- `.key?` and `.value?`

---

```rb
pokemon = {
  :squirtle => "water",
  :bulbasaur => "grass",
  :charizard => "fire"
}
p pokemon.key?(:bulbasaur) # true
p pokemon.key?(:mewtwo) # false

p pokemon.value?("fire") # true
p pokemon.value?("rock") # false
```

---

### Delete

- `.delete(key)`
- returns value

---

```rb
pokemon = {
  :squirtle => "water",
  :bulbasaur => "grass",
  :charizard => "fire"
}
removed = pokemon.delete(:charizard)
p removed # "fire"
p pokemon # {:squirtle=>"water", :bulbasaur=>"grass"}
```

---

### Select and reject

- `.select` and `.reject`

---

```rb
recipe = {sugar: 5, flour: 10, salt: 2, pepper: 4}
high = recipe.select { |ingredient, teaspoons| teaspoons >= 5}
p high # {:sugar=>5, :flour=>10}
low = recipe.reject { |ingredient, teaspoons| teaspoons >= 5}
p low # {:salt=>2, :pepper=>4}
```

---

### Merge

- `.merge(hash)`
- if there are duplicate keys, argument value is preserved
- does not mutate original hash

---

```rb
recipe_1 = {sugar: 5, flour: 10, salt: 2, pepper: 4}
recipe_2 = {corn_starch: 3, milk: 8, salt: 4}
p recipe_1.merge(recipe_2) # {:sugar=>5, :flour=>10, :salt=>4, :pepper=>4, :corn_starch=>3, :milk=>8}
```

---

_Author: Tu Vo_
