## Data Types

In Python, data takes the form of objects - either built-in objects that Python provides or objects we create using Python tools.

---

#### Numeric Types

```python
# Integers (unlimited size)
a = 1234
b = -24
c = 0
d = 99999999999999

# floating point numbers
a = 1.23
b = 3.14e-10

# octal, hex and binary literals
a = 0o177
b = 0x9ff
c = 0b101010

# complex number literals
a = 3+4j
b = 3J

# Decimal and Fraction extension types
from decimal import *
from fraction import Fraction

a = Decimal('1.0')
b = Fraction(1, 3)

# Boolean Types
a = True
b = False
```

---

#### Strings

```python
# empty string
s = ''

# doubles quotes are same as single
s = "algo"
t = 'algo'

# escape sequences
s = `s\na\tp\`

# triple-quoted block strings
s = """
    multiline
    """

# raw strings
s = r'\temp\span'

# byte strings
s = b'sp\xc4m'
print(type(s)) # <class 'bytes'>

# unicode strings
s = u'sp\u00c4m'
print(s) # spÄm

```

---

### Lists

```python
# empty list
l = []

# mixed types
l = [123, 'abc', 1.23 ]

# nested sublists
l = ['algo', ['academy']]

# list of an iterable's items
l = list('algo')
m = list(range(0, 5))
```

---

### Dictionaries

```python
# empty dictionary
d = {}

# two-item dictionary
d  = {"name": "tu", "hobbies": "coding" }

# nesting
d = {"cto": {"name": "tu", "hobbies": "coding"}}
```

---

#### Tuples

```python

# empty tuple
t =  ()

# one-item tuple
t = ('algo', )

# two-item tuple
t = ('algo', 'academy')

# nested tuple
t = ('algo', ('academy', 'dev'))

# tuple of items in an iterable
t = tuple('algo')
```

---

_Author: Tu Vo_
