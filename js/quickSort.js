/**
 * 快速排序
 */
class QuickSort {
  constructor(arr) {
    this.arr = arr
  }
  quickSort(startIndex = 0,endIndex = this.arr.length -1){
    if(startIndex >= endIndex) {
      return this
    }
    const pivotIndex = this.partition(startIndex,endIndex)

    this.quickSort(startIndex,pivotIndex - 1)
    this.quickSort(pivotIndex + 1,endIndex)

    return this
  }
  partition(startIndex,endIndex) {
    const p = this.arr[startIndex]
    let left = startIndex,
        right = endIndex

    while (left !== right) {
      while (left < right && this.arr[right] > p) {
        right --
      }

      while (left < right && this.arr[left] <= p) {
        left ++
      }
      if(left < right) {
        [this.arr[left],this.arr[right]] = [this.arr[right],this.arr[left]]
      }
    }

    [this.arr[startIndex],this.arr[left]] = [this.arr[left],this.arr[startIndex]]

    return left
  }
  getArr(){
    return this.arr
  }
}


class Sort extends QuickSort {
  constructor(arr){
    super(arr)
  }
  getArr(){
    return this.arr
  }
}



const sort = new Sort([2,4,6,1,3,5]).quickSort()

console.log(sort.getArr())

/**
 * 快速排序使用了分治的思想。每一轮排序从数组中选择一个基准，将小于等于基准的数放在基准的左边，将大于基准的数放在基准的右边。将大数组以基准所在的位置分为两个小数组，重复前面的步骤，直到小数组只有1个数为止
 */
