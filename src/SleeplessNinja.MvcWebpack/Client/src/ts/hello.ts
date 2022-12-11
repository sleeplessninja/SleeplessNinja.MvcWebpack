import * as _ from "lodash";

export namespace funcs {
    export function hello(name : string): void {
        const message = 'Hello, ' + _.capitalize(name);;
        console.log(message);
    }
}