// LICENSE : MIT
"use strict";
var Greeting:{
    new (word:string):{
        hello():string;
    }
};

class GreetingImp {
    constructor(public word = " wordld ") {

    }

    hello() {
        return "6.64 " + this.word;
    }
}
Greeting = GreetingImp;
var obj = new Greeting("askdaskdlaskdlsak");
var str = obj.hello();
console.log(str);