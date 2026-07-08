/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deepestLeavesSum(root: TreeNode | null): number {
    const queue: TreeNode[] = [root];
    let latestLevelSum = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        latestLevelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;

            latestLevelSum += node.val;

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return latestLevelSum;
};
