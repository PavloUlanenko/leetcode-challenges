/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    function findSmallest(arr) {
        let smallest = arr[0];
        let index = 0;

        for (let i=0; i<arr.length; i++) {
            if (arr[i]<smallest) {
                smallest = arr[i];
                index = i;
            }
        }

        return index;
    }

    if (nums.length < 2) return;
    const copy = nums.concat();
    const result = [];

    for (let i=0; i<nums.length; i++) {
        const smallestIndex = findSmallest(copy);

        nums[i] = copy[smallestIndex];
        copy.splice(smallestIndex, 1);
    }
};
