function maximumCount(nums: number[]): number {
    function findFirstNonNegativeIndex(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] >= 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }

    function findFirstPositiveIndex(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] > 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }

    const firstNonNegativeIndex = findFirstNonNegativeIndex(nums);
    const negCount = firstNonNegativeIndex;
    const firstPositiveIndex = findFirstPositiveIndex(nums);
    const posCount = nums.length - firstPositiveIndex;
    
    return Math.max(negCount, posCount);
};
