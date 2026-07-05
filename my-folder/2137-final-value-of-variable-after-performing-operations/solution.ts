function finalValueAfterOperations(operations: string[]): number {
    let val = 0;

    for (let i=0; i<operations.length; i++) {
        if (operations[i].includes('+')) {
            val++;
        } else {
            val--;
        }
    }

    return val;
};
