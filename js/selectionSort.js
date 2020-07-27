/**
 * 选择排序
 */
class SelectionSort {
  constructor(arr){
    this.arr = arr
  }

  /**
   * 选择排序
   * @param reverse 倒序
   * @returns {SelectionSort}
   */
  selectionSort(reverse = false) {
    const len = this.arr.length
    let baseIndex

    for(let i = 0; i < len; i++) {
      baseIndex = i
      for(let j = i + 1; j < len; j++) {
        if(!reverse && this.arr[baseIndex] > this.arr[j] || reverse && this.arr[baseIndex] < this.arr[j]) {
          baseIndex = j
        }
      }
      [this.arr[i],this.arr[baseIndex]] = [this.arr[baseIndex],this.arr[i]]
    }

    return this
  }
  getArr() {
    return this.arr
  }
}

class Sort extends SelectionSort{
  constructor(arr){
    super(arr)
  }
}

console.log(new Sort([1,4,3,6,7]).selectionSort(true).getArr())

/*
 选择排序的思路是：从左到右选择数组中的每一位，将选择的这一位与剩余的无序数组中每个数进行比较，如果发现剩余的无序数组中的某一个值比本轮选中的值更小，就将这两个数交互。一直到最后一个
*/



