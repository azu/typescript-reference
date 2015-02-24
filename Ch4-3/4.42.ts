// LICENSE : MIT
"use strict";
interface Message {
    from:string;
    text: string;
    build():string;
}
class PrivateMessage implements Message {
    constructor(public from:string, public to:string, public text:string) {
    }

    build() {
        return "";
    }
}
class PublicMessage implements Message {
    constructor(public from:string,
                public to:string,
                public text:string) {
    }

    build() {
        return "";
    }
}