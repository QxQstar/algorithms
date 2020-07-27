class ShellSort {
  constructor(arr){
    this.arr = arr
  }

  shellSort() {
    const len = this.arr.length
    let gap = 1

    while (gap < len / 3) {
      gap = gap * 3 + 1
    }



    while (gap) {
      for(let i = gap; i < len; i = i + 1) {
        const temp = this.arr[i]
        let j = i - gap
        while (j>=0 && this.arr[j] > temp) {
          this.arr[j + gap] = this.arr[j]
          j = j - gap

        }

        this.arr[j + gap] = temp
      }

      gap = Math.floor(gap / 3)
    }
    return this
  }
  getArr(){
    return this.arr
  }
}

console.log(new ShellSort([9,1,4,5,6,7,2]).shellSort().getArr())

/**
 * 希尔排序是插入排序的改进版。将大数组分成多个间隔相同的小数组，然后在这些小数组中进行插入排序。每一轮排序都改变间隔，直到间隔为1
 */


