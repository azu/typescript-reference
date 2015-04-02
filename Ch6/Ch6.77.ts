/**
 * Created by azu on 2015/04/03.
 */
module InnerModule {
    export var str = "Hey";
}
module InnerModules {
    export function hello(word = "world") {
        return "Hey" + word;
    }
}