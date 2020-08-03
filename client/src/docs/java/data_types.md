## Data Types

---

### Primitives

Java is statically-typed, which means that all variables must first be declared before they can be used. A primitive type is predefined by the language and is named by a reserved keyword. The 8 primitive data types for Java are:

- `Byte`
  - The byte data type is an 8-bit (1 byte) signed two's complement integer.
  - It has a minimum value of -128 and a maximum value of 127 (inclusive).
- `Short`
  - The short data type is a 16-bit (2 bytes) signed two's complement integer.
  - It has a minimum value of -32,768 and a maximum value of 32,767 (inclusive).
- `Int`
  - By default, the int data type is a 32-bit (4 bytes) signed two's complement integer.
  - It has a minimum value of -2,147,483,648 and a maximum of 2,147,483,647 (inclusive).
- `Long`
  - The long data type is a 64-bit (8 bytes) two's complement integer.
  - The signed long has a minimum value of -9,223,372,036,854,775,808 and a maximum value of 9,223,372,036,854,775,807.
- `Float`
  - Stores fractional numbers.
  - Sufficient for storing up to 8 decimal digits.
  - Size: 4 bytes.
- `Double`
  - Stores fractional numbers.
  - Sufficient for storing up to 16 decimal digits.
  - Size: 8 bytes.
- `Boolean`
  - The boolean data type has only two possible values: `true` and `false`.
  - Size: 1 byte.
- `Char`
  - Stores a single ASCII or Unicode value.
  - Size: 2 bytes.

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

    // boolean
    boolean myBool = false;
    System.out.println(myBool); // false
    boolean isJavaFun = true;
    System.out.println(((Object)isJavaFun).getClass().getSimpleName());
    // Returns "Boolean"
  }
}
```

---

_Author: Ryuichi Miyazaki_
