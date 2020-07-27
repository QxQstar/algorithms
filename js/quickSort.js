/**
 * 快速排序
 */
class QuickSort {
  constructor(arr) {
    this.arr = arr
  }

  /**
   *  快速排序
   * @param reverse 是否排序
   * @param startIndex 排序的起始位置
   * @param endIndex 排序的终止位置
   * @returns {QuickSort}
   */
  quickSort(reverse = false,startIndex = 0,endIndex = this.arr.length -1){
    if(startIndex >= endIndex) {
      return this
    }
    const pivotIndex = this.partition(reverse,startIndex,endIndex)

    this.quickSort(reverse,startIndex,pivotIndex - 1)
    this.quickSort(reverse,pivotIndex + 1,endIndex)

    return this
  }
  partition(reverse,startIndex,endIndex) {
    const p = this.arr[startIndex]
    let left = startIndex,
        right = endIndex

    const isMoveRight = (rVal,p) => {
      return !reverse && rVal > p || reverse && rVal < p
    }
    const isMoveLeft = (lVal,p) => {
      return !reverse && lVal <= p || reverse && lVal >= p
    }

    while (left !== right) {
      while (left < right && isMoveRight(this.arr[right],p)) {
        right --
      }
      while (left < right && isMoveLeft(this.arr[left],p)) {
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
