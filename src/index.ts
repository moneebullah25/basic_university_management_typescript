import { Student } from "./Student.js";
import { LMS } from "./LMS.js";
import { Course } from "./Course.js";
import { Teacher } from "./Teacher.js";

let noofStudents = 10;
let students: Student[] = [];
let courses: Course[] = [];
let teachers: Teacher[] = [];

function insertStudent(students: Student[], nic: number, stdID: number, stdEmail: string, stdPassword: string, 
    stdSection: string, stdCoursesEnrolled: Course[])
{
    students.push(new Student(nic, stdID, stdEmail, stdPassword, stdSection, stdCoursesEnrolled));
}

function insertCourse(courses: Course[], id:string, name: string, creditHour: number)
{
    courses.push(new Course(id, name, creditHour));
}

function insertTeacher(teachers: Teacher[], nic: number, tID: number, tEmail: string, tPassword: string, 
    tCoursesTeaching: Course[])
{
    teachers.push(new Teacher(nic, tID, tEmail, tPassword, tCoursesTeaching));
}

for (let i: number = 0; i < noofStudents; i++){
    students[i].PrintCompleteDetail();
}

let lmsSession = new LMS(students, noofStudents);

for (let i: number = 0; i < noofStudents; i++){
    lmsSession.signIn(100+i, "12345678");
    lmsSession.signOut(100+i);
}