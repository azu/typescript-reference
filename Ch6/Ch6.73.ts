/**
 * Created by azu on 2015/04/03.
 */
class Person {
    private static _lastCreated:Person;

    constructor(public firstName:string, public lastName:string, public age:number) {
    }

    static createPerson(firstName:string, lastName:string, age:number) {
        this._lastCreated = new this(firstName, lastName, age);
        return this._lastCreated;
    }

    static get lastCreated() {
        return this._lastCreated;
    }
}

var person = Person.createPerson("sasas", "asas", 20);
console.log(person === Person.lastCreated);