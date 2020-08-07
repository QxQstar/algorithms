/**
 * 求两个数组的并集
 * @param arr1
 * @param arr2
 * @returns {any[]}
 */
function arrayUnion(arr1, arr2) {
  const arr = arr1.concat(arr2)

  return Array.from(new Set(arr))
}

console.log(arrayUnion([1,2,3,4,4],[3,4,5,6]))

/**
 * 求两个数组的并集
 * @param arr1
 * @param arr2
 * @returns {any[]}
 */
function arrayUnion2(arr1,arr2) {
  const tempObj = {};

  arr1.forEach(item => {
    tempObj[item] = item
  })

  arr2.forEach(item => {
    tempObj[item] = item
  })

  return Object.values(tempObj)
}

console.log(arrayUnion2([1,2,3,4,4],[3,4,5,6]))


