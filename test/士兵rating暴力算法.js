var numTeams = function(rating) {
    let num = 0
    for(let i = 0; i < rating.length - 2; i++) {
        for(let j =i + 1; j < rating.length - i + 1; j++) {
            for(let k = rating.length - 1; k > j; k --) {
                if(rating[i] > rating[j] && rating[j] > rating[k]){
                    console.log(i,j,k)
                }
            }
        }
    }
    <!-- return num -->
};
numTeams([2,5,3,4,1])
