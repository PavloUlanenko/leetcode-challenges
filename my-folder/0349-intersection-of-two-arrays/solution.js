/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const res = [];
    let s1 = 0;
    let s2 = 0;
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    while (s1<nums1.length && s2<nums2.length) {
        if (nums1[s1] < nums2[s2]) {
            s1++;
        } else if (nums1[s1] > nums2[s2]) {
            s2++;
        } else {
            res.push(nums1[s1]);
            s1++;
            s2++;
        }
    }

    return Array.from(new Set(res));
};
