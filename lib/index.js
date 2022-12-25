import { Student } from "./Student.js";
import { LMS } from "./LMS.js";
let noofStudents = 10;
let students = [];
for (let i = 0; i < noofStudents; i++) {
    students.push(new Student(i, 100 + i, "user" + i, "12345678"));
    students[i].PrintCompleteDetail();
}
let lmsSession = new LMS(students, noofStudents);
for (let i = 0; i < noofStudents; i++)
    lmsSession.signIn(100 + i, "12345678");
//# sourceMappingURL=index.js.map