/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let num = 0
    for(let i = 0; i < rating.length - 2; i++) {
        for(let j = i + 1; j < rating.length  - 1; j++) {
            for(let k = rating.length - 1; k > j; k --) {
                if(rating[i] > rating[j] && rating[j] > rating[k]) {
                    num++
                }
                if(rating[i] < rating[j] && rating[j] < rating[k]) {
                    num++
                }
            }
        }
    }
    return num
};
