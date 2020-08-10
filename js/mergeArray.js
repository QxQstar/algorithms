/**
 * 合并两个正序排列的数组，并且合并完成之后依然有序(直接插入法:平均时间复杂度为 O(n^2))
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
function mergeArrByInsert(arr1,arr2) {
  const result = [].concat(arr1,arr2),
    len1 = arr1.length
  for(let i = len1; i < result.length; i++) {
    const item = result[i];
    let j = i - 1

    while (j >= 0 && item < result[j]) {
      result[ j + 1] = result[j]
      j--
    }

    result[j + 1] = item
  }

  return result
}

console.log( mergeArrByInsert([1,4,6,8],[4,10,14,15]) )

/**
 * 合并两个正序排列的数组，并且合并完成之后依然有序(时间复杂度为O(n))
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
function mergeArr(arr1, arr2) {
  let result = [],
    len1 = arr1.length,
    len2 = arr2.length;

  let i = 0,
    j = 0

  while (i < len1 && j < len2) {
    const item1 = arr1[i],
      item2 = arr2[j]

    if(item1 <= item2) {
      result.push(item1)
      i ++
    } else if(item2 < item1) {
      result.push(item2)
      j ++
    }
  }

  if(i < len1) {
    result = result.concat(arr1.slice(i,len1))
  }
  if(j < len2) {
    result = result.concat(arr2.slice(j,len2))
  }

  return result
}

console.log( mergeArr([1,4,6,8],[4,10,14,15]) )
