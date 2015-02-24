// LICENSE : MIT
"use strict";
function twice(value:number):number;
function twice(value:string):string;
function twice(value:any):any {
    if (typeof value === "string") {
        return value + value;
    } else if (typeof value === "number") {
        return value * 2;
    }
}
console.log(twice(2));
console.log(twice("+"));