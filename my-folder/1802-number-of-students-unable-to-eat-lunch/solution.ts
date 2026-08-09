function countStudents(students: number[], sandwiches: number[]): number {
    let willEat = students.length;
    let attempts = 0;

    while (sandwiches.length) {
        if (attempts === students.length) break;

        if (sandwiches[0] === students[0]) {
            sandwiches.shift();
            students.shift();
            willEat--;
            attempts = 0;
        } else {
            students.push(students.shift());
            attempts++;
        }
    }

    return willEat;
};
