class InsertSort {
  constructor(arr) {
    this.arr = arr
  }
  insertSort(){
    for(let i = 1;i < this.arr.length ; ++i) {
      let j = i - 1
      const temp = this.arr[i]
      while (temp < this.arr[j] && j >= 0) {
        this.arr[j + 1] = this.arr[j]
        j--
      }
      this.arr[j + 1] = temp
    }

    return this
  }
  getArr(){
    return this.arr
  }
}

class Sort extends InsertSort{
  constructor(arr) {
    super(arr)
  }
}


console.log(new Sort([3,5,1,2,4,7,2]).insertSort().getArr())

/*
直接插入排序的思路：将无序数组中的数插入到有序数组中的。拿无序数组中的首元素与有序数组中的每个元素进行比较并且插入到合适的位置
*/
