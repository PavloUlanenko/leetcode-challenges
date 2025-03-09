/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const temp = new Set();
    for (let i=0; i<= nums.length; i++) {
        if (!temp.has(nums[i])) {
            nums[temp.size] = nums[i];
            temp.add(nums[i]);
        } else {

        }
    }
    nums.length = temp.size - 1;
    return nums.length;
};
