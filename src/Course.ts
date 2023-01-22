export class Course {
    readonly _id: string;
    readonly _name: string;
    readonly _creditHour: number;
    constructor (id:string, name: string, creditHour: number)
    {
        this._id = id;
        this._name = name;
        this._creditHour = creditHour;
    }

    get getID() {return this._id;}
    get getName() {return this._name;}
    get getCreditHour() {return this._creditHour;}

    PrintCompleteDetail()
    {
        console.log(`ID: ${this.getID}\nName: ${this.getName}\nCredit Hour: ${this.getCreditHour}\n`);
    }
}
