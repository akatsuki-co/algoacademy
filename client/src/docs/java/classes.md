## Classes

---

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

_Author: Ryuichi Miyazaki_
