function numberOfSteps(num: number): number {
    let counter = 0;
    let remainder = num;

    while (remainder) {
        if (remainder%2) {
            remainder -= 1;
        } else {
            remainder /= 2;
        }

        counter++;
    }

    return counter;
};
