/**
 *  on 2015/02/24.
 */
var hello = (word?:string)=> {
    if (word === undefined) {
        word = "TypeScript";

    }
    return "Hello, " + word;
};

console.log(hello());
console.log(hello("e"));