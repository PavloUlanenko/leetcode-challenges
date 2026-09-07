function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const res = [];
    let maximum = 0;

    for (let i=0; i<candies.length; i++) {
        maximum = maximum < candies[i] ? candies[i] : maximum;
    }

    for (let i=0; i<candies.length; i++) {
        res.push(candies[i] + extraCandies >= maximum);
    }

    return res;
};
