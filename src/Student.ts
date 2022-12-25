import {Person} from "./Person.js";
import {Course} from "./Course.js";

export class Student extends Person {
    readonly _stdId: number;
    readonly _stdEmail: string;
    readonly _stdPassword: string;
    readonly _stdSection?: string;
    readonly _stdCoursesEnrolled?: Course[];
    constructor(nic: number, stdID: number, stdEmail: string, stdPassword: string, 
        stdSection: string, stdCoursesEnrolled: Course[])
    {
        super(nic);
        this._stdId = stdID;
        this._stdSection = stdSection;
        this._stdEmail = stdEmail;
        this._stdPassword = stdPassword;
        this._stdCoursesEnrolled = stdCoursesEnrolled;
    }

    get getStdID() {return this._stdId;}
    get getStdSection() {return this._stdSection;}
    get getStdEmail() {return this._stdEmail;}
    get getStdPassword() {return this._stdPassword;}
    get getStdCoursesEnrolled() { return this._stdCoursesEnrolled;}

    PrintCompleteDetail() {
        console.log(`NIC: ${this.getNic}\nName: ${this.getName}\nAge: ${this.getAge}\nGender: ${this.getGender}\nStudent ID: ${this.getStdID}\nStudent Section: ${this.getStdSection}\nStudent Email: ${this.getStdEmail}\nStudent Courses: ${this.getStdCoursesEnrolled}`);
    }
}