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
            console.log("Successfully logged in");
            LMS.LoggedIn.set(user._stdId, true);
        }
        else {
            console.log("Incorrect id or password");
        }
    }
    signOut(id) {
        const user = LMS.LoggedIn.get(id);
        if (user) {
            LMS.LoggedIn.delete(id);
            console.log("Successfully logged out");
        }
        else {
            console.log("You are not logged in");
        }
    }
}
//# sourceMappingURL=LMS.js.map