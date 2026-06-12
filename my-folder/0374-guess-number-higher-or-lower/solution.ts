/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function binarySearch(left: number, right: number): number {
    const mid = Math.floor((left + right) / 2);
    const apiResult = guess(mid);
    
    if (apiResult === 0) {
        return mid;
    } else if (apiResult === 1) {
        return binarySearch(mid + 1, right);
    } else {
        return binarySearch(left, mid - 1);
    }
}

function guessNumber(n: number): number {
    return binarySearch(1, n);
};
