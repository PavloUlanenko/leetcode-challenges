function intersection(nums1: number[], nums2: number[]): number[] {
    const set2 = new Set(nums2)
    return [...new Set(nums1.filter(el => set2.has(el)))];
};
