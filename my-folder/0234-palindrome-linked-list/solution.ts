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

function isPalindrome(head: ListNode | null): boolean {
    const values = [];
    let current = head;

    while (current?.val !== undefined) {
        values.push(current.val);
        current = current.next;
    }

    let start = 0;
    let end = values.length - 1;
console.log('values: ', values);
    while (start<end) {
        if (values[start] !== values[end]) return false;
        start++;
        end--;
    }

    return true;
};
