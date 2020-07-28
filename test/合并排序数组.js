/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
 <!-- 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

 初始化 A 和 B 的元素数量分别为 m 和 n。
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/sorted-merge-lcci
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 -->

var merge = function(A, m, B, n) {
    function bubbleSort(arr) {
      if (Array.isArray(arr)) {
        for (var i = arr.length - 1; i > 0; i--) {
          for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
          }
        }
        return arr;
      }
    }
    let tem = B
    for(let i = A.length - 1; i >= A.length - n ; i--) {
        if(A[i] == 0) {
            A[i] = B[B.length - 1]
            B.pop()
        }else{
            break
        }
    }
    return bubbleSort(A)
};