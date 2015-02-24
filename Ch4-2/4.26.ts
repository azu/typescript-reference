// LICENSE : MIT
"use strict";
class Base {
    name:string;

    hello() {
        return "Hello, " + this.name;
    }
}
class Derived extends Base {
    constructor(name:string) {
        super();
        this.name = name;
    }

    haveAreYou() {
        return this.hello() + " h???";
    }
}
var derived = new Derived("TypeScript");
console.log(derived.haveAreYou());