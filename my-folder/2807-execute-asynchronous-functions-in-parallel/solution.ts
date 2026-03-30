type Fn<T> = () => Promise<T>

async function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const res = [];
        let count = 0;

        for (let j=0; j<functions.length; j++) {
            functions[j]()
                .then((resLoc) => {
                    res[j] = resLoc;
                    count++;
                    if (count === functions.length) {
                        resolve(res);
                    }
                })
                .catch((err) => reject(err));
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
