1、/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length;) {
        if(nums[i] == val) {
            nums.splice(i,1)
            i--; 
        }
        i++;
    }
    return nums.length

};
2、
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums= nums.sort()
    let flag = nums.indexOf(val)
    if (flag == -1 ) return nums.length
    let i = flag + 1;
    for(i;i < nums.length; i++) {
        if(nums[i] != val) break
    }
    i = i - flag 
    nums.splice(flag,i)
    return nums.length
};