import * as _ from "lodash";
export var funcs;
(function (funcs) {
    function hello(name) {
        var message = 'Hello, ' + _.capitalize(name);
        ;
        console.log(message);
    }
    funcs.hello = hello;
})(funcs || (funcs = {}));
