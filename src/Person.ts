export class Person {
    readonly _nic: number; 
    _name?: string; 
    _age?: number; 
    _gender?: string;
    constructor(id: number, name: string="", age: number=-1, gender: string="")
    {
        this._nic = id; this._name = name; this._age=age; this._gender=gender;
    }

    get getNic() {return this._nic;}
    get getName() {return this._name;}
    set setName(name: string) {this._name = name;}
    get getAge() {return this._age;}
    set setAge(age: number) {this._age = age;}
    get getGender() {return this._gender;}
    set setGender(gender: string) {this._gender = gender;}
}