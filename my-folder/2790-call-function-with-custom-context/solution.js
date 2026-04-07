/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    const tempKey = Symbol('temp');
    Object.defineProperty(context, tempKey, {
        value: this,
        enumerable: false,
        configurable: true
    });
    
    const result = context[tempKey](...args);
    delete context[tempKey];
    
    return result;
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
