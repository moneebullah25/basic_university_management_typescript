export class Course {
    _id;
    _name;
    _creditHour;
    constructor(id, name, creditHour) {
        this._id = id;
        this._name = name;
        this._creditHour = creditHour;
    }
    get getID() { return this._id; }
    get getName() { return this._name; }
    get getCreditHour() { return this._creditHour; }
}
//# sourceMappingURL=Course.js.map