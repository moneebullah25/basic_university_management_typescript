import {Person} from "./Person.js";
import {Course} from "./Course.js";

export class Teacher extends Person {
    readonly _tId: number;
    readonly _tEmail: string;
    readonly _tPassword: string;
    readonly _tCoursesTeaching?: Course[];
    constructor(nic: number, tID: number, tEmail: string, tPassword: string, 
        tCoursesTeaching: Course[])
    {
        super(nic);
        this._tId = tID;
        this._tEmail = tEmail;
        this._tPassword = tPassword;
        this._tCoursesTeaching = tCoursesTeaching;
    }

    get getTID() {return this._tId;}
    get getTEmail() {return this._tEmail;}
    get getTPassword() {return this._tPassword;}
    get getTCoursesTeaching() { return this._tCoursesTeaching;}

    PrintCompleteDetail() {
        console.log(`NIC: ${this.getNic}\nName: ${this.getName}\nAge: ${this.getAge}\nGender: ${this.getGender}\nStudent ID: ${this.getTID}\nStudent Email: ${this.getTEmail}\nStudent Courses: ${this.getTCoursesTeaching}`);
    }
}