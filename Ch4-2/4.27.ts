// LICENSE : MIT
"use strict";
class Base {
    name:string;
}
class Derived extends Base {
    constructor(name:string) {
        super();
        this.name = name;
    }
}
function showName(base:Base) {
    console.log(base.name);
}
var base = new Base();
base.name = "JavaScript";
var derived = new Derived("TypeScript");
showName(base);

showName(derived);