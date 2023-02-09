/**
 * Time Complexity: O(n^2)
 * Space Coplexity: O(n)
 * 
 * 
 * @param {number[]} A [1, 1, 2, 2, 3, 3]
 * @param {number[]} B [1, 2, 1, 2, 1, 2]
 * 
// for any two points (xi, yi) and (xj, yj)
// (xi, yi) is the bootom left point
// (xj, yj) is the top right point
// so xi<xj && yi<yj
// in that case if (xi, yj) and (xj, yi) exists  , it is a rectangle
// use set to check if they exists
 * 
 */
function countRectangles(A,B){
    let hset = new Set()
    for(let i=0;i<A.length;i++){
        hset.add(`${A[i]}${B[i]}`)
    }
    let count = 0
    for(let i=0;i<A.length ;i++){
        for(let j=0;j<A.length;j++){
            if(A[i] < A[j] && B[i] < B[j]){
                let point1 = `${A[i]}${B[j]}`
                let point2 = `${A[j]}${B[i]}`
                if(hset.has(point1) && hset.has(point2)) count++
            }
        }
    }
    return count
}
countRectangles([0, 0, 1, 1, 2,2,11],[0, 1, 0, 1, 0,1, 11])

//https://www.geeksforgeeks.org/find-number-of-rectangles-that-can-be-formed-from-a-given-set-of-coordinates/