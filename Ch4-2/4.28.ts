// LICENSE : MIT
"use strict";
class Sample {
    private str = "Hi";

    public getStr() {
        return this.str;
    }
}
var sample = new Sample();
console.log(sample.getStr());
