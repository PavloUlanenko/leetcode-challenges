function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const res = [];
    for (let i=0; i<nums1.length; i++) {
        let elInd = nums2.findIndex((el) => el === nums1[i]);
        if (elInd === -1) {
            res.push(-1);
        } else {
            let found = -1;
            for (let j=elInd; j<nums2.length; j++) {
                if (nums2[j] > nums1[i]) {
                    found = nums2[j];
                    break;
                }
            }
            res.push(found);
        }
    }

    return res;
};
