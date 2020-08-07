/**
 * 求两个数组的交集(以空间换时间)
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
function arrayIntersection(arr1, arr2) {
  const obj = {}

  arr1.forEach((item) => {
    if(!obj[item]) obj[item] = []
    obj[item].push(item)
  })

  const result = []

  arr2.forEach(item => {
    if(obj[item] && obj[item].length) {
      result.push(item)
      obj[item].pop()
    }
  })

  return result
}

console.log(arrayIntersection([1,2,3,3,1,7,0],[3,4,3,3,8,0]))

/**
 * 求两个数组的交集(空间复杂度会减少，时间复杂度会增加)
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
function arrayIntersection2(arr1, arr2) {
  arr1 = [...arr1].sort((a,b) => a-b)
  arr2 = [...arr2].sort((a,b) => a-b)

  const len1 = arr1.length,
    len2 = arr2.length,
    result = []

  let i = 0,
    j = 0

  while ( i < len1 && j < len2) {
    if(arr1[i] < arr2[j]) {
      i ++
    } else if(arr1[i] > arr2[j]) {
      j ++
    } else {
      result.push(arr2[j])
      i++
      j++
    }
  }

  return result
}

console.log(arrayIntersection2([1,2,3,3,1,7,0],[3,4,3,3,8,0]))
