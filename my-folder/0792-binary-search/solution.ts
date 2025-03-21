function search(nums: number[], target: number): number {
    if (!nums.length) return -1;

    let medianInd = Math.floor(nums.length / 2);
    let median = nums[medianInd];
    
    if (median === target) {
        return medianInd;
    }
    if (median > target) {
        return search(nums.slice(0, medianInd), target);
    }
    if (median < target) {
        const res = search(nums.slice(medianInd+1), target);

        return res === -1 ? -1 : res + medianInd + 1;
    }
};
