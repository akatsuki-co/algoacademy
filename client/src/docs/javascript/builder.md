## Builder Pattern

---

- When piecewise object construction is complicated, provide an API for doing it succinctly.

---

### Motivation

- Some objects are simple and can be created in a single initializer call.
- Other objects require a lot of ceremony to create.
- Having an object with 10 initializer arguments is not productive.
- Instead, opt for piecewise construction.
- The Builder pattern provides an API for constructing an object step-by-step.

---

### Scenario 1

- If certain fields are unknown about an object at time of creation, it can be confusing to remember the correct order of parameters to pass in.

---

```js
class Address {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }
}

class Person {
  constructor(name, age, occupation, address) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.address = address;
  }
}

const person = new Person(
  'Tu',
  undefined,
  undefined,
  new Address('Oakland', 'CA')
);
console.log(person);

// Person {
//   name: 'Tu',
//   age: undefined,
//   occupation: undefined,
//   address: Address { city: 'Oakland', state: 'CA' }
// }
```

---

- Having a Builder provides a lot more flexibility in how you create your objects.

---

```js
class Address {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

class PersonBuilder {
  constructor(name) {
    this.person = new Person(name);
  }

  setAge(age) {
    this.person.age = age;
    return this;
  }

  setAddress(address) {
    this.person.address = address;
    return this;
  }

  setOccupation(occupation) {
    this.person.occupation = occupation;
    return this;
  }

  build() {
    return this.person;
  }
}

const person1 = new PersonBuilder('Tu').build();
console.log(person1); // Person { name: 'Tu' }

const person2 = new PersonBuilder('Tu')
  .setAge(30)
  .setOccupation('engineer')
  .setAddress(new Address('Oakland', 'SF'))
  .build();
console.log(person2);

// Person {
//   name: 'Tu',
//   age: 30,
//   occupation: 'engineer',
//   address: Address { city: 'Oakland', state: 'SF' }
// }
```

---

- In JS, using objects as "configurable" optional parameters (with or without default values) can perform the same functionality.

---

```js
class Address {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }
}

class Person {
  constructor(
    name,
    { age = 0, occupation = 'unemployed', address = null } = {}
  ) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.address = address;
  }
}

const person3 = new Person('Tu', {
  age: 30,
  occupation: 'engineer',
  address: new Address('Oakland', 'CA'),
});
console.log(person3);

// Person {
//   name: 'Tu',
//   age: 30,
//   occupation: 'engineer',
//   address: Address { city: 'Oakland', state: 'CA' }
// }
```

---

_Author: Tu Vo_
