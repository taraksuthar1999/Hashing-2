/**
 * 
 * @param {number} A 2
 * @param {string} B "bbaabb"
 */
function ReplicatingSubstring_2(A, B) {
    const hmap = new Map()
    for (let i of B) {
        if (hmap.has(i)) hmap.set(i, hmap.get(i) + 1)
        else hmap.set(i, 1)
    }
    for (let i of hmap) {
        if (i[1] % A !== 0) return false
    }
    return true
}
const a = ReplicatingSubstring_2(2, "bbaabb")