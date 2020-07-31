/**
 * @param {number[]} nums
 * @return {number}
 */

 <!-- 数组中占比超过一半的元素称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1 -->

var majorityElement = function(nums) {
    let count = {}
    if(nums.length <= 1) return nums[0]
    nums.forEach((item,index) => {
        if(!count[item]) {
            count[item] = 1
        }else{
            count[item]++
        }
    })
    let valList = []
    for(let key in count) {
        valList.push(count[key])
    }
    let keyList = Object.keys(count)
    let tmp = valList[0]
    // let len = 0
    valList.forEach((item,i) => {
        if(item > tmp) tmp = i
        // if(item == tmp)  len++;
    }) 

    if(valList[tmp] <= nums.length / 2) return -1
    return keyList[tmp] || keyList[0]
};