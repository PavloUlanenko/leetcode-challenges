function splitIntoDigits(num: number): number[] {
    const res = [];

    while (num) {
        res.unshift(num%10);
        num = (num - num%10) / 10;
    }

    return res;
}

function separateDigits(nums: number[]): number[] {
    const res = [];

    for (let i=0; i<nums.length; i++) {
        res.push(...splitIntoDigits(nums[i]));
    }

    return res;
};
