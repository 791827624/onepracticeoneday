/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let flag = Math.min.apply(Math,nums)
    let zero = 0
    if (zero != flag) return 0
    for ( flag; flag < nums.length ; flag++) {
        if(nums.indexOf(flag + 1) == -1 ) return flag + 1
    }
};
数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？

注意：本题相对书上原题稍作改动