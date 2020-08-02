## Data Types

---

### Primitives

The Java programming language is statically-typed, which means that all variables must first be declared before they can be used. A primitive type is predefined by the language and is named by a reserved keyword. The 8 primitive data types for Java are:

- Byte - The byte data type is an 8-bit (1 byte) signed two's complement integer. It has a minimum value of -128 and a maximum value of 127 (inclusive).
- Short - The short data type is a 16-bit (2 bytes) signed two's complement integer. It has a minimum value of -32,768 and a maximum value of 32,767 (inclusive)
- Int - By default, the int data type is a 32-bit (4 bytes) signed two's complement integer, which has a minimum value of -231 and a maximum value of 231-1.
- Long - The long data type is a 64-bit (8 bytes) two's complement integer. The signed long has a minimum value of -263 and a maximum value of 263-1.
- Float - Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
- Double - Stores fractional numbers. Sufficient for storing 15 decimal digits.
- Boolean - The boolean data type has only two possible values: `true` and `false`. The size if 1 byte.
- Char - Stores a single character/letter or ASCII values.

---

```java
byte number=100;
System.out.println(((Object)number).getClass().getSimpleName());        
// Returns "Byte"
short number=10;
System.out.println(((Object)number).getClass().getSimpleName());               
// Returns "Short"
int number=6;
System.out.println(((Object)number).getClass().getSimpleName());               
// Returns "Integer"
long number=1000;
System.out.println(((Object)number).getClass().getSimpleName());               
// Returns "Long"
float number=3.14;
System.out.println(((Object)number).getClass().getSimpleName());               
// Returns "Float"
double number=1.618;
System.out.println(((Object)number).getClass().getSimpleName());               
// Returns "Double"
boolean isJavaFun = true;
System.out.println(((Object)isJavaFun).getClass().getSimpleName());            
// Returns "Boolean"
char myFavoriteLetter = 'R';
System.out.println(((Object)myFavoriteLetter).getClass().getSimpleName());    
// Returns "Character"
```

---

### Reference Data Types or Non-Primitive Data Types

The Reference Data Types will contain a memory address of variable value because the reference types won’t store the variable value directly in memory.

- **String** - Strings are defined as an array of characters. The difference between a character array and a string is the string is terminated with a special character ‘\0’.

```java
String word = "pizza";

// Strings can be concatenated with the + operator
String word0 = "Pink ";
String word1= "Shorts";
String word2 = word0 + word1;
System.out.println(word2);         // Returns "Pink Shorts"

```

- Class - A class is a user-defined blueprint or prototype from which objects are created.  It represents the set of properties or methods that are common to all objects of one type.

```java
// Our Class called Dog
public class Dog 
{ 
    // Instance Variables 
    String name; 
    String breed; 
    int age; 
    String color;
}
```
- Object - A combination of data and procedures working on the available data. In Java, an object is created from a class and has a state and behavior.

```java
// Our Class called Dog
public class Dog 
{ 
    // Instance Variables 
    String name; 
    String breed; 
    int age; 
    String color; 
  
    // Constructor Declaration of Class 
    public Dog(String name, String breed, 
                   int age, String color) 
    { 
        this.name = name; 
        this.breed = breed; 
        this.age = age; 
        this.color = color; 
    } 

    public static void main(String[] args) 
    { 
        Dog Fido = new Dog(“fido”,”chihuahua”, 5, “brown”); 
        System.out.println(Fido.breed); 
    } 
}
// Outputs “chihuahua”

```

- Interface - Like a class, an interface can have methods and variables, but the methods declared in an interface are by default abstract (only method signature, no body).

```java
// Interface declaration
interface Canine {
   public void bark(); // interface method (does not have a body)

}

// Dog implements Canine
public class Dog implements Canine {

   public void bark() {
      System.out.println(“Woof!”);
   }

   public static void main(String args[]) {
      Dog fido = new Dog();
      fido.bark();
   }
} 
// Outputs “Woof!”
```

---

- Array - An array is a group of like-typed variables that are referred to by a common name.

```java
// An Array of Strings
String[] cars = {“Honda”, “Toyota”,  “Nissan”, “Mazda”, “Subaru”};

// An Array of Integers
int[] myNum = {7, 25, 19, 88};

// Two dimensional arrays with 10 x 10 elements
int[][] two_dimensional_array = new int[10][10];
```

---

### Functions

In Java, all function definitions must be inside classes. We also call functions methods. 

- `static` means this method belongs to the class Main and not to a specific instance of Main.
- `void` means this method doesn't return a value.

```java
public class Main {
    public static void foo() {
        // Do something here
    }
}
```

---

_Author: Ryuichi Miyazaki_