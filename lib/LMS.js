export class LMS {
    _student;
    _noofStudent;
    static LoggedIn = new Map([
        [0, true]
    ]);
    constructor(student, noofStudent) {
        this._student = student;
        this._noofStudent = noofStudent;
    }
    signIn(id, password) {
        const user = this._student.find((std) => { return std._stdId === id && std._stdPassword === password; });
        if (user) {
            console.log("Succesfully logged in\n");
            LMS.LoggedIn.set(user._stdId, true);
        }
        else {
            console.log("Incorrect id or password");
        }
        ;
    }
}
//# sourceMappingURL=LMS.js.map