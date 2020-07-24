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
