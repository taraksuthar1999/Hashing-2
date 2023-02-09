/**
 * 
 * @param {number[][]} points [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * 
 * knowing that two lines with same slope are identical if there exist a common point.
 * 
 */
function solve(points){
    let max = 0
    for(let i = 0;i<points.length;i++){
        const hmap = new Map()
        for(let j=0;j<points.length;j++){
            if(i==j) continue
            //calculate m -> y = mx + c -> slope
            /**
             * y1 = mx1 + c
             * y2 = mx2 + c
             * y1-y2 = m (x1-x2)
             * m = y1-y2/x1-x2
             * numerator = y1-y2
             * denominator = x1-x2
             * gcd bcuz 1/3 ~= 3/9
             */
            let x1 = points[i][0]
            let y1 = points[i][1]
            let x2 = points[j][0]
            let y2 = points[j][1]
            let n = y1-y2
            let d = x1-x2
            const gcd = GCD(n,d)
            n /= gcd
            d /= gcd
            const key = JSON.stringify({n,d})
            if(hmap.has(key)) hmap.set(key,hmap.get(key)+1)
            else hmap.set(key,1)
        }
        const count = (function(hmap){
            let max = 0
            for(let i of hmap){
                if(i[1]>max) max = i[1]
            }
            return max
        })(hmap)
        max = Math.max(count+1,max)
    }
    return max
}

function GCD(a,b){
    if(b==0) return a
    return GCD(b,a%b)
}

solve([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])
//https://leetcode.com/problems/max-points-on-a-line/