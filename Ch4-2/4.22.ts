// LICENSE : MIT
"use strict";
class Sample {
    word:string;

    constructor(word:string) {
        this.word = word;
    }
}
var sample = new Sample("TypeScript");
var word = sample.word;
console.log(word);
