type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    
    return async function(...args) {
        return new Promise(async (res, rej) => {
            const promise = fn.apply(this, args);
            const timer = setTimeout(() => {
                rej('Time Limit Exceeded');
            }, t);
            return promise.then((raw) => res(raw)).catch((err) => { rej(err) })
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
