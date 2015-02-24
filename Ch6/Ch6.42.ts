// LICENSE : MIT
"use strict";
interface IPerson {
    name:string;
    age :number;
}
function printPerson(person:IPerson):void {
    console.log(JSON.stringify(person));
}

printPerson({
    name: "strin",
    age: 1
});
