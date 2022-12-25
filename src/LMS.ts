import { Student } from "./Student.js";

export class LMS {
    _student: Student[];
    _noofStudent: number;
    static LoggedIn = new Map<number, boolean>([
        [0, true]
    ]);

    constructor(student: Student[], noofStudent: number)
    {
        this._student = student; this._noofStudent = noofStudent;
    }

    signIn(id: number, password: string)
    {
        const user = this._student.find((std) => {return std._stdId === id && std._stdPassword === password});
        if (user) {console.log("Successfully logged in"); LMS.LoggedIn.set(user._stdId, true)}
        else {console.log("Incorrect id or password")}
    }

    signOut(id: number)
    {
        const user = LMS.LoggedIn.get(id);
        if (user) {LMS.LoggedIn.delete(id);console.log("Successfully logged out");}
        else {console.log("You are not logged in");}
    }
}