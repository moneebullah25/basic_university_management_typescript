# LMS (Learning Management System)

**Introduction**

This project is developed using TypeScript, a superset of JavaScript, and it is built to demonstrate basic university management system functionality.

**Project Structure**

The project consists of four main classes: Person, Student, Teacher, and Course. The Person class is the base class that holds basic information such as NIC, name, age, and gender. 

**Student Class STrucutre**

The Student class inherits from the Person class and holds additional information such as student ID, email, password, section, and courses enrolled. 

**Usuage**

```typescript
const students: Student[] = [
    new Student(123, 1, "student1@university.edu", "password1", "section1", [courses[1], courses[2]]),
    new Student(124, 2, "student2@university.edu", "password2", "section2", [courses[3], courses[4]]),
    new Student(125, 3, "student3@university.edu", "password3", "section3", [courses[5], courses[6]])
];
```

**Teacher Class Structure**

The Teacher class also inherits from the Person class and holds additional information such as teacher ID, email, password, and courses taught. 

**Usuage**

```typescript
const teachers: Teacher[] = [
    new Teacher(456, 11, "teacher1@university.edu", "password1", [courses[1]]),
    new Teacher(457, 12, "teacher2@university.edu", "password2", [courses[3]])
];
```

**Course Class Structure**
The Course class holds information such as course ID, name, and credit hours.

**Usuage**
```typescript
let courses: Course[] = [
    new Course("CSC101", "Intro to Computer Science", 3),
    new Course("MAT201", "Calculus", 4), 
    new Course("ENG101", "English Composition", 3), 
    new Course("PHY101", "Introduction to Physics", 4), 
    new Course("HIS101", "World History", 3),
    new Course("ART101", "Introduction to Art", 3)
]
```

**LMS Class Structure**

The LMS class is the main class that provides the functionality of the system. It has two main methods: signIn and signOut. The signIn method is used to log in to the system by providing a student ID and password. The signOut method is used to log out of the system by providing a student ID.

**Usuage**

To use the LMS class, you need to create an instance of it and provide an array of students and the number of students as arguments. You can then call the signIn and signOut methods on the instance of the LMS class to log in and log out of the system.

```typescript
// Create an instance of the LMS class
const lms = new LMS(students, students.length);

// Allow a student to log in
lms.signIn(1, "password1");

// Allow the student to log out
lms.signOut(1);
```