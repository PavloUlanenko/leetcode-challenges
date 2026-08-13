function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const res = [0, 0];

    for (let i=0; i<nums1.length; i++) {
        for (let k=0; k<nums2.length; k++) {
            if (nums1[i] === nums2[k]) {
                res[0]++;
                break;
            }
        }
    }

    for (let j=0; j<nums2.length; j++) {
        for (let k=0; k<nums1.length; k++) {
            if (nums2[j] === nums1[k]) {
                res[1]++;
                break;
            }
        }
    }

    return res;
};
