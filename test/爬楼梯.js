/**
 * @param {number} n
 * @return {number}
 */
 <!-- 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。 -->
var climbStairs = function(n) {
    if (n == 1) return n
    if (n == 2) return n
    if (n == 3) return n
    if (n == 4) return 5
    if (n == 5) return 8
    if (n == 6) return 13
    if (n == 7) return 21


    return climbStairs(n - 1) + climbStairs (n - 2)
};