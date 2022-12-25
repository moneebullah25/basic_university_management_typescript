import {Student} from "./Student.js";
import { LMS } from "./LMS.js";
   

let noofStudents = 10;
let students: Student[] = [];
for (let i: number = 0; i < noofStudents; i++){
    students.push(new Student(i, 100+i, "user"+i, "12345678"));
    students[i].PrintCompleteDetail();
}

let lmsSession = new LMS(students, noofStudents);

for (let i: number = 0; i < noofStudents; i++)
    lmsSession.signIn(i, "12345678");