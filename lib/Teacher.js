import { Person } from "./Person.js";
export class Teacher extends Person {
    _tId;
    _tEmail;
    _tPassword;
    _tCoursesTeaching;
    constructor(nic, tID, tEmail, tPassword, tCoursesTeaching) {
        super(nic);
        this._tId = tID;
        this._tEmail = tEmail;
        this._tPassword = tPassword;
        this._tCoursesTeaching = tCoursesTeaching;
    }
    get getTID() { return this._tId; }
    get getTEmail() { return this._tEmail; }
    get getTPassword() { return this._tPassword; }
    get getTCoursesTeaching() { return this._tCoursesTeaching; }
    PrintCompleteDetail() {
        console.log(`NIC: ${this.getNic}\nName: ${this.getName}\nAge: ${this.getAge}\nGender: ${this.getGender}\nStudent ID: ${this.getTID}\nStudent Email: ${this.getTEmail}\nStudent Courses: ${this.getTCoursesTeaching}`);
    }
}
//# sourceMappingURL=Teacher.js.map