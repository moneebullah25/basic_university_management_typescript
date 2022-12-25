export class Person {
    _nic;
    _name;
    _age;
    _gender;
    constructor(id, name = "", age = -1, gender = "") {
        this._nic = id;
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    get getNic() { return this._nic; }
    get getName() { return this._name; }
    set setName(name) { this._name = name; }
    get getAge() { return this._age; }
    set setAge(age) { this._age = age; }
    get getGender() { return this._gender; }
    set setGender(gender) { this._gender = gender; }
}
//# sourceMappingURL=Person.js.map