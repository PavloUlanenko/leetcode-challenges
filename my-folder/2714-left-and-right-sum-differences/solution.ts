function leftRightDifference(nums: number[]): number[] {
    const leftArr = [];
    const rightArr = [];
    let leftSum = 0;
    let rightSum = 0;
    const res = [];

    for (let i=0; i<nums.length; i++) {
        leftSum = leftSum + (nums[i-1] ?? 0);
        rightSum = rightSum + (nums[nums.length - i] ?? 0)
        rightArr.unshift(rightSum);
        leftArr.push(leftSum);
    }

    for (let j=0; j<nums.length; j++) {
        res.push(Math.abs(leftArr[j] - rightArr[j]));
    }

    return res;
};
