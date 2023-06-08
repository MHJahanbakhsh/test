console.log('1');

let promise = new Promise(resolve => {
    console.log('2');
    resolve();
});

promise.then(() => {
    console.log('3');
});

console.log('4');

// Output:
// 1
// 2
// 4
// 3