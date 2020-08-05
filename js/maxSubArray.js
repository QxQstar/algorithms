/**
 * 求最大子序和
 * @param nums
 * @returns {*}
 */
function maxSubArray(nums) {
  let sum = nums[0]
  let max = sum
  for(let i = 1; i < nums.length; i++) {
    if(sum <= 0) {
      sum = nums[i]
    } else {
      sum = nums[i] + sum
    }

    if(max < sum) {
      max = sum
    }
  }
  return max
}

maxSubArray([2,-2,4,6,7,-1,-2])

/**
 * 求最大子序和所在的子序
 * @param nums
 * @returns {Array}
 */
function maxSubArrayPos(nums) {
  let sum = nums[0]
  let max = sum
  let result = []
  let start = 0
  for(let i = 1; i < nums.length; i++) {
    if(sum <= 0) {
      sum = nums[i]
      start = i
    } else {
      sum = nums[i] + sum
    }

    if(max < sum) {
      max = sum
      result = nums.slice(start,i + 1)
    }
  }
  return result
}

maxSubArrayPos([2,-2,4,6,7,-1,-2])
