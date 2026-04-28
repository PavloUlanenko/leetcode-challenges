/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let head2 = null;
    let current = head;
    const res = [];

    while (current) {
        res.push(current.val);
        current = current.next;
    }

    let head3 = null;
    for (let i=0; i<res.length; i++) {
        const node = new ListNode(res[i]);
        node.next = head3;
        head3 = node;
    }

    return head3;
};
