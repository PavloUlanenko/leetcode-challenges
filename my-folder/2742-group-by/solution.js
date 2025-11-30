/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const obj = {};

    this.forEach((el, ind, arr) => {
        const key = fn(arr[ind]);
        if (key in obj) {
            obj[key].push(el);
        } else {
            obj[key] = [el];
        }
    });
    
    return obj;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
