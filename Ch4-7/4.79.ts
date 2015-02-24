// LICENSE : MIT
"use strict";
interface Show {
    show():string;
}
function showArray<T extends Show>(array:T[]):T[] {
    array.forEach(value => console.log(value.show()));
    return array;
}

class Alphabet{
    show(){
        return "test";
    }
}
var array = [new Alphabet];
showArray(array);