/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param {number[]} A [1, 1, 2, 3, 3]
 * @param {number[]} B [1, 2, 1, 2, 1]
 * 
 * for each point find the number of points laying on the same x-axis and y-axis
 */
function countRightTriangles(A, B) {
    const xhmap = new Map()
    const yhmap = new Map()
    for (let i of A) {
        if (xhmap.has(i)) xhmap.set(i, xhmap.get(i) + 1)
        else xhmap.set(i, 1)
    }
    for (let i of B) {
        if (yhmap.has(i)) yhmap.set(i, yhmap.get(i) + 1)
        else yhmap.set(i, 1)
    }
    let count = 0
    for (let i in A) {
        let x = xhmap.get(A[i])
        let y = yhmap.get(B[i])
        count += ((x - 1) * (y - 1))
    }
    return count
}

countRightTriangles([1, 1, 2, 3, 3], [1, 2, 1, 2, 1])
//