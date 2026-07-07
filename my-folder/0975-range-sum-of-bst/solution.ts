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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    const stack: TreeNode[] = [root];
    let sum = 0;

    while (stack.length) {
        const node = stack.pop();
        if (node.val >= low && node.val <= high) {
            sum += node.val;
        }
        if (node.left && node.val > low) {
            stack.push(node.left);
        }
        if (node.right && node.val < high) {
            stack.push(node.right);
        }
    }

    return sum;
};
