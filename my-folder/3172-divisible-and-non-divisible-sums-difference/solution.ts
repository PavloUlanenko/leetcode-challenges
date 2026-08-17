function differenceOfSums(n: number, m: number): number {
    let divisable = 0;
    let notDivisable = 0;

    for (let i=1; i<=n; i++) {
        if (i%m) {
            divisable += i;
        } else {
            notDivisable += i;
        }
    }

    return divisable - notDivisable;
};
