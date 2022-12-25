import { Student } from "./Student.js";

export class LMS {
    _student: Student[];
    _noofStudent: number;
    static LoggedIn = new Map([
        [0, true]
    ]);

    constructor(student: Student[], noofStudent: number)
    {
        this._student = student; this._noofStudent = noofStudent;
    }

    signIn(id: number, password: string)
    {
        const user = this._student.find((std) => {return std._stdId === id && std._stdPassword === password});
        if (user) {console.log("Succesfully logged in"); LMS.LoggedIn.set(user._stdId, true)}
        else {console.log("Incorrect id or password")};
    }
}