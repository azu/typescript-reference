// LICENSE : MIT
"use strict";
interface Comparable<T> {
    compare(t:T):boolean;
}
class Tuple<T,U> implements Comparable<Tuple<T,U>> {
    constructor(public first?:T, public second?:U) {

    }

    compare(t:Tuple<T,U>):boolean {
        return this.first === t.first && this.second === t.second;
    }
}

var tupleA = new Tuple("Hi", 8);
var tupleB = new Tuple("Hi", 8);
console.log(tupleA.compare(tupleB));