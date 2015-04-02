/**
 * Created by azu on 2015/04/02.
 */
class Person {
    fullName = this.firstName + " " + this.lastName;

    constructor(public firstName:string, public lastName:string, public age:number) {
        console.log("setup " + this.profile);
    }

    get profile():string {
        return this.fullName + " (" + this.age + ")";
    }

    setAge(age:number) {
        this.age = age;
    }
}

var person = new Person("azu", "azu", 60);
console.log(person.profile);
person.setAge(18);
console.log(person.profile);