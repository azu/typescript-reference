/**
 *  on 2015/02/24.
 */
var hello = (word = "world") => "Hello, " + word;
console.log(hello());

var helloW = function (word) {
    if (typeof word === "undefined") {
        word = "world";
    }
    return "Hellow, " + word;
};
console.log(helloW("sss"));