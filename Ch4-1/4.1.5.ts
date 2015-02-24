/**
 *  on 2015/02/24.
 */
var hwllo = (...words:string[]) => {
    return "Heeeee. " + words.join(",");
};
var result = hwllo("JavaScrip", "TYPESCRIP");
console.log(result);