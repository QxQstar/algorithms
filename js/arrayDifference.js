/**
 * 求数组 arr1 与 arr2 的差集 (属于 arr1 但不属于 arr2 的元素集合)
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
function arrayDifference(arr1, arr2) {
  const tempObj = {},
    result = []

  arr2.forEach(item => {
    tempObj[item] = item
  })

  arr1.forEach(item => {
    if(!tempObj[item]) {
      result.push(item)
      // 避免当 arr1 中有重复的值时，集合中返回重复的值
      tempObj[item] = item
    }
  })

  return result
}

console.log(arrayDifference([1,2,3,5],[1,2,3,6]))

