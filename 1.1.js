function imperative(array, func) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]));
    }
    return result;
}


function declarative(array, func) {
    return array.map(func);
}

//not sure if this was the question agenda?