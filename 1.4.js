let obj = {
    a: 1,
    b: 2,
    c: 3
};

let middleware = {
    get: function (target, prop) {
        // console.log({
        //     target,
        //     prop
        // })
        return "404";
    }
};

let proxy = new Proxy(obj, middleware);

console.log(proxy.a); // "404"
console.log(proxy.b); // "404"
console.log(proxy.c); // "404"