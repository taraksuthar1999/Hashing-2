/**
 * 
 * @param {number[]} nums1 []
 * @param {number[]} nums2 []
 */
function commonElements(nums1, nums2) {
    const num1Map = nums1.reduce((acc, ele) => {
        if (acc[ele]) acc[ele]++
        else acc[ele] = 1
        return acc
    }, {})
    const num2Map = nums2.reduce((acc, ele) => {
        if (acc[ele]) acc[ele]++
        else acc[ele] = 1
        return acc
    }, {})
    const res = []
    for (let i in num1Map) {
        if (num2Map[i]) {
            let count = num1Map[i] <= num2Map[i] ? num1Map[i] : num2Map[i]
            for (let j = 0; j < count; j++) {
                res.push(Number(i))
            }
        }
    }
    return res
}
commonElements([1, 2, 2, 1], [2, 2])

//