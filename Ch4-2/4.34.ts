// LICENSE : MIT
"use strict";
class Sample {
    private _secretString:string;

    get str():string {
        return this._secretString;
    }

    set str(value:string) {
        this._secretString = value;
    }

    printStr() {
        console.log(this._secretString);
    }
}
var sample = new Sample();
sample.str = "tst";
sample.printStr();