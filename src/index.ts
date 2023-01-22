import { Student } from "./Student.js";
import { Course } from "./Course.js";
import { Teacher } from "./Teacher.js";
import { LMS } from "./LMS.js";

let courses: Course[] = [
    new Course("CSC101", "Intro to Computer Science", 3),
    new Course("MAT201", "Calculus", 4), 
    new Course("ENG101", "English Composition", 3), 
    new Course("PHY101", "Introduction to Physics", 4), 
    new Course("HIS101", "World History", 3),
    new Course("ART101", "Introduction to Art", 3)
]

// Create an array of students
const students: Student[] = [
    new Student(123, 1, "student1@university.edu", "password1", "section1", [courses[1], courses[2]]),
    new Student(124, 2, "student2@university.edu", "password2", "section2", [courses[3], courses[4]]),
    new Student(125, 3, "student3@university.edu", "password3", "section3", [courses[5], courses[6]])
];

// Create an array of teachers
const teachers: Teacher[] = [
    new Teacher(456, 11, "teacher1@university.edu", "password1", [courses[1]]),
    new Teacher(457, 12, "teacher2@university.edu", "password2", [courses[3]])
];


// Create an instance of the LMS class
const lms = new LMS(students, students.length);

// Allow a student to log in
lms.signIn(1, "password1");

// Display students information
console.log("Student Information:");
for (let i: number = 0; i < students.length; i++){
    students[i].PrintCompleteDetail();
}

// Display courses information
console.log("Courses Information:");
for (let i = 0; i < courses.length; i++){
    courses[i].PrintCompleteDetail();
}

// Display teacher information
console.log("Teacher Information:");
for (let i: number = 0; i < teachers.length; i++){
    teachers[i].PrintCompleteDetail();
}

// Allow the student to log out
lms.signOut(1);