## Null Object Pattern

---

- When there is a scenario where you might return null from an API, it is better to have a class representing that object than continuously checking if it is null.

---

### Motivation

- Bugs are likely to rise when you have null or undefined floating throughout your application.

---

### Scenario 1 (Before)

---

```js
class User {
  constructor(id, name, isAdmin) {
    this.id = id
    this.name = name
    this.isAdmin = isAdmin
  }

  hasAccess() {
    return this.isAdmin
  }
}

const users = [new User(1, 'Ryu', true), new User(2, 'Ken', false)]

function getUser(id) {
  return users.find((user) => user.id === id)
}

function printUser(id) {
  const user = getUser(id)
  /*
      We need to explicitly tell the console.log to print `Guest` if the user does not have a name.
      This is problematic since we need to remember to always put this every time we use the users name.
      It is also bad because if we want to print `Unknown User` instead, we would need to change every place that we put `Guest` which will most likely be all over the application.
    */
  let name = 'Guest'
  if (user != null && user.name != null) {
    name = user.name
  }
  // let name = user ? user.name : 'Guest' // alternate syntax
  console.log('Hello ' + name)

  /*
      This will throw an error if we don't first check that the user object has this function available and isn't null.
      This is a lot of extra code to add in every time we want to check user access, and could cause bugs that are easy to miss if we forget to do the null checks.
    */
  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log('You have access')
  } else {
    console.log('You do not have access')
  }
}

printUser(1)
printUser(2)

/*
      Hello Ryu
      You have access
      Hello Ken
      You do not have access
*/
```

---

### Scenario 1 (After)

---

```js
class User {
  constructor(id, name, isAdmin) {
    this.id = id
    this.name = name
    this.isAdmin = isAdmin
  }

  hasAccess() {
    return this.isAdmin
  }
}

class NullUser {
  constructor() {
    this.id = -1
    this.name = 'Guest'
    this.isAdmin = false
  }

  hasAccess() {
    return this.isAdmin
  }
}

const users = [new User(1, 'Ryu', true), new User(2, 'Ken', false)]

function getUser(id) {
  const user = users.find((user) => user.id === id)
  /*
      We are now checking if the user is null before returning,and instead returning a NullUser object if the user is null. This means that we no longer need to check for null users later in the code and can treat all users that are returned from this function the same whether they exist or not.
    */
  return user || new NullUser()
}

function printUser(id) {
  const user = getUser(id)
  console.log('Hello ' + user.name)

  if (user.hasAccess()) {
    console.log('You have access')
  } else {
    console.log('You are not allowed here')
  }
}

printUser(1)
printUser(2)

/*
      Hello Ryu
      You have access
      Hello Ken
      You do not have access
*/
```

---

_Author: Tu Vo_
