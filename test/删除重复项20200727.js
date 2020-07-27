/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length;) {
        if(nums.indexOf(nums[i]) != i) {
            nums.splice(i,1)
        }else{
            i++;
        }
    }
    return nums.length
};
<!-- console.log(removeDuplicates([1,2,3,1])) -->