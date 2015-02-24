// LICENSE : MIT
"use strict";
var head = <T>(t:T[]):T=>t[0];
var num:number = head<number>([10, 20.30]);
console.log(num);

var str:string = head(["rea", "blue", "yellow"]);
console.log(str);