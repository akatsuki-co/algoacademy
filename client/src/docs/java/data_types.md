## Data Types

---

### Primitives

The Java programming language is statically-typed, which means that all variables must first be declared before they can be used. A primitive type is predefined by the language and is named by a reserved keyword. The 8 primitive data types for Java are:

- `Byte` - The byte data type is an 8-bit (1 byte) signed two's complement integer. It has a minimum value of -128 and a maximum value of 127 (inclusive).
- `Short` - The short data type is a 16-bit (2 bytes) signed two's complement integer. It has a minimum value of -32,768 and a maximum value of 32,767 (inclusive).
- `Int` - By default, the int data type is a 32-bit (4 bytes) signed two's complement integer, which has a minimum value of -2,147,483,648 and a maximum of 2,147,483,647 (inclusive).
- `Long` - The long data type is a 64-bit (8 bytes) two's complement integer. The signed long has a minimum value of -9,223,372,036,854,775,808 and a maximum value of 9,223,372,036,854,775,807.
- `Float` - Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits (4 bytes).
- `Double` - Stores fractional numbers. Sufficient for storing 15 decimal digits (8 bytes).
- `Boolean` - The boolean data type has only two possible values: `true` and `false` (1 byte).
- `Char` - Stores a single character/letter, ASCII value or Unicode value (2 bytes).

---

```java
class DataTypes {
  public static void main(String[] args) {
    // byte
    byte myByte = 126;
    System.out.println(myByte); // 126
    System.out.println(((Object)myByte).getClass().getSimpleName());
    // Returns "Byte"

    // short
    short myShort = 64;
    System.out.println(myShort); // 64
    System.out.println(((Object)myShort).getClass().getSimpleName());
    // Returns "Short"

    // int
    int myInt = 1_024; // can use underscore for readability
    System.out.println(myInt); // 1024
    System.out.println(((Object)myInt).getClass().getSimpleName());
    // Returns "Integer"
    // Max/Min int
    System.out.println(Integer.MIN_VALUE); // -2147483648
    System.out.println(Integer.MAX_VALUE); // 2147483647

    // long
    long myLong = 4_000_000_000L;
    System.out.println(myLong); // 4000000000
    System.out.println(((Object)myLong).getClass().getSimpleName());
    // Returns "Long"

    // float (single-precision, 8 digits after decimal)
    float myFloat = 1.587f;
    System.out.println(myFloat); // 1.587
    System.out.println(((Object)myFloat).getClass().getSimpleName());
    // Returns "Float"

    // double (double-precision, 16 digits after decimal)
    double myDouble = 5.286_868_667_85d;
    System.out.println(myDouble); // 5.28686866785
    System.out.println(((Object)myDouble).getClass().getSimpleName());
    // Returns "Double"

    // char (2 bytes)
    char myFavoriteLetter = 'R';
    char myUnicode = '\u00A9';
    System.out.println(myFavoriteLetter); // 'R'
    System.out.println(myUnicode); // ©
    System.out.println(((Object)myFavoriteLetter).getClass().getSimpleName());
    // Returns "Character"

    // bool
    boolean myBool = false;
    System.out.println(myBool); // false
    boolean isJavaFun = true;
    System.out.println(((Object)isJavaFun).getClass().getSimpleName());
    // Returns "Boolean"
  }
}

```

---

### Reference Data Types or Non-Primitive Data Types

---

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

- Class - A class is a user-defined blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type.

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

---

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
