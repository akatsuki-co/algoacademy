## Facade

---

- Provides a simple, easy-to-understand user interface over a large and sophisticated body of code.

---

### Scenario 1 (Before)

- There is a lot of repeat code in every fetch call.

---

```js
function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json())
}

function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json())
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name)
      console.log(posts.length)
    })
  })
})
```

---

### Scenario 1 (After)

---

- Consumers would not have to worry about fetch's implementation
- It is easy to switch to a different library like Axios without having to change every place you use fetch

---

```js
function getUsers() {
  return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId) {
  return getFetch('https://jsonplaceholder.typicode.com/posts', {
    userId: userId,
  })
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name)
      console.log(posts.length)
    })
  })
})

function getFetch(url, params = {}) {
  const queryString = Object.entries(params)
    .map((param) => {
      return `${param[0]}=${param[1]}`
    })
    .join('&')
  return fetch(`${url}?${queryString}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json())
}

function getFetch(url, params = {}) {
  return axios({
    url: url,
    method: 'GET',
    params: params,
  }).then((res) => res.data)
}
```

---

_Author: Tu Vo_
