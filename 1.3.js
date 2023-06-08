function flat(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(flat(array[i]));
        } else {
            result.push(array[i]);
        }
    }
    return result;
}

let nestedArray = [4, [
    [5],
    [6, [7], 8], 9, 10
]];
let flattenedArray = flat(nestedArray);
console.log(flattenedArray); // [4,5,6,7,8,9,10]