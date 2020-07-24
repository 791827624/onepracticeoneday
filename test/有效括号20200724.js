/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let flag = true 
    let leftlist = ['(','{','[']
    let rightlist = [')','}',']']
    let temp = []
    s = s.split('')
    for(let i = 0; i < s.length; i++){
        if (leftlist.includes(s[i])) {
            temp.push(s[i])
        }
        if (rightlist.includes(s[i])) {
            if(leftlist.indexOf(temp[temp.length - 1]) == rightlist.indexOf(s[i])) {
                temp.pop()
            }else{
                return false
            }
        }
         if (s[i] == '') {
            continue
        }
    }
    return temp.length == 0 ?  true :false
};

<!-- //给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。 -->

<!-- 有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 -->