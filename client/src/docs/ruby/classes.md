# Classes

---

## Metadata

---

### Superclass and ancestors

---

```rb
p "hello".class.superclass # Object
p "hello".class.ancestors # [String, Comparable, Object, Kernel, BasicObject]

p 1.class.superclass # Numeric
p 1.class.ancestors # [Integer, Numeric, Comparable, Object, Kernel, BasicObject]
```

---

## General

---

### Create a class

- instance variables begin with the `@` symbol
- The `@` symbol is called a sigil, a special character that denotes the variable's scope
- Without the `@` sigil, the variable would be interpreted as a local variable it is used in

---

```rb
class User

  def initialize
    @name = "User #{rand(1..100)}"
    @email = "test@test.com"
  end

  def hello
    p "#{@name} says 'Hi'"
  end

  # override to_s
  def to_s
    p "Name: #{@name}, ID: #{self.object_id}"
  end

  # getter
  def name
    @name
  end

  # setter
  def name=(new_name)
    @name = new_name
  end

end

user = User.new
p user # #<User:0x0000561a22ff7de0 @name="User 30", @email="test@test.com">
p user.inspect # #<User:0x0000561a22ff7de0 @name="User 30", @email="test@test.com">

# instance variables
p user.instance_variables # [:name=, :hello]

user.hello # "User 61 says 'Hi'"

# see class methods
p user.methods - Object.methods # [:hello]

p user.to_s # "Name: User 75, ID: 47116970845020"

p user.email # undefined method `email' for #<User:0x0000561ef254ab20 @name="User 2", @email="test@test.com"> (NoMethodError)

user.name = "Tu"
user.to_s # "Name: Tu, ID: 46933658545060"
```

---

- shortcut accessor methods:
  - `attr_accessor` - both setter and getter
  - `attr_reader` - getter only
  - `attr_writer` - setter only

---

```rb
class User

  attr_accessor :name, :email

  def initialize
    @name = "User #{rand(1..100)}"
    @email = "test@test.com"
  end

end

user = User.new
p user.name # "User 4"

user.name = "Tu"
p user.name # "Tu"
```

---

- Add parameters to initialize method

---

```rb
class User

  attr_accessor :name, :email

  def initialize(name, email)
    @name = name
    @email = email
  end

end

user = User.new("Tu", "test@test.com")
p user.name # "Tu"

user.name = "Ted"
p user.name # "Ted"
```

---

### Private methods

- can only be called within the object
- cannot be invoked by another object
- cannot be called by an explicit receiver - only the current object is able to recieve the method

---

```rb
class User

  attr_accessor :name, :email

  def initialize(name, email)
    @name = name
    @email = email
    @id = generate_id
  end

  private

  def generate_id
    rand(0..999)
  end

end

user = User.new("Tu", "test@test.com")
p user # #<User:0x0000557438319be0 @name="Tu", @email="test@test.com", @id=798>
user.generate_id # `<main>': private method `generate_id' called for #<User:0x000055bcbc7b8ad0> (NoMethodError)
```

---

### Protected methods

- can be invoked only by objects of the same class
- can be called within the same family of objects
- are used to compare objects of the same class

---

```rb
class Car

  def initialize(age, miles)
    base_value = 20000
    age_deduction = age * 1000
    miles_deduction = (miles / 10.to_f)
    @value = base_value - age_deduction - miles_deduction
  end

  def compare_car_with(car)
    self.value > car.value ? "Your car is better!" : "Your car is worse!"
  end

  protected

  def value
    @value
  end

end

civic = Car.new(3, 30000)
p civic.value # `<main>': protected method `value' called for #<Car:0x00005634388c6de8 @value=14000.0> (NoMethodError)

fiat = Car.new(1, 20000)

p civic.compare_car_with(fiat) # "Your car is worse!"
```

---

### Add validation to setter methods

---

```rb
class User

  attr_accessor :name
  attr_reader :password

  def initialize(name, password)
    @name = name
    @password = password
  end

  def password=(new_password)
    @password = new_password if validate_password(new_password)
  end

  private

  def validate_password(password)
    password.is_a?(String) && password.length >= 6 && password =~ /\d/
  end

end

user = User.new("Tu", "password")
user.password = 123456
p user.password # "password"
user.password = "test"
p user.password # "password"
user.password = "test1234"
p user.password # "test1234"
```

---

### Monkey Patching

- allows you to modify classes, including built-ins
- if you write a method that already exists, you will override it

---

```rb
class Array

  def sum
    total = 0
    self.each { |element| total += element if element.is_a?(Integer) }
    total
  end

end

p [1, "2", 3, 4, "hello"].sum # 8
```

---

### Class variabes

- a class variable belongs to the whole class
- a class method can be called even if objects/instances do not exist, i.e. `new`

---

```rb
class Bicycle
  @@count = 0

  def self.description
    "Hi there!"
  end

  def self.count
    @@count
  end

  def initialize
    @@count += 1
  end

end

p Bicycle.description # "Hi there!"
p Bicycle.count # 0

bicycle = Bicycle.new

p Bicycle.count # 1
```

---

## Inheritance

---

```rb
class Person

  attr_accessor :name

  def initialize(name)
    @name = name
  end

end

class Employee < Person
end

employee = Employee.new("Tu")
p employee # #<Employee:0x000055c859bfe6a0 @name="Tu">
p employee.is_a?(Person) # true

# only applies to class
p employee.instance_of?(Employee) # true
p employee.instance_of?(Person) # false
```

---

### Super

---

```rb
class Person

  attr_accessor :name

  def initialize(name)
    @name = name
  end

end

class Employee < Person

  attr_accessor :id

  def initialize(name, id)
    super(name)
    @id = id
  end

end

employee = Employee.new("Tu", 2)
p employee # #<Employee:0x00005591bbb9d708 @name="Tu", @id=2>
```

---

### Singleton

---

```rb
class Person

  def play_game
    rand(1..100) > 50 ? "Win" : "Lose"
  end

end

tu, ted = Person.new, Person.new

# singleton method
def tu.play_game
  "Win"
end

p tu.singleton_methods # [:play_game]
p ted.singleton_methods # []
```

---

### Hash as initialize argument

---

```rb
class Person

    attr_accessor :name, :age, :occupation

    def initialize(info={})
      @name = info[:name]
      @age = info[:age]
      @occupation = info[:occupation]
    end

end

person = Person.new({age: 30, name: "Tu", occupation: "Engineer"})
p person # #<Person:0x000055ec8ab076e8 @name="Tu", @age=30, @occupation="Engineer">

# nil is set if no hash or argument is given
person = Person.new()
p person # #<Person:0x000056056c5b5988 @name=nil, @age=nil, @occupation=nil>
```

---

_Author: Tu Vo_
