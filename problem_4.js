/**
 * 
 * @param {string} s 
 */
function ReplicatingSubstring(s) {
    let S = s.slice(1) + s.slice(0, s.length - 1)
    let i = 0
    let j = s.length - 1
    while (j < S.length) {
        const str = S.substring(i, j + 1)
        if (str == s) return true
        i++
        j++
    }
    return false
}
const a = ReplicatingSubstring("abcabcabcabc")

//https://leetcode.com/problems/repeated-substring-pattern/