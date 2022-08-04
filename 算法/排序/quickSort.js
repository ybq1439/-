/*
 * @Descripttion: 
 * @version: 
 * @Author: ybq
 * @Date: 2022-08-01 22:35:58
 * @LastEdiTime: 
 */
// 快速排序
// 分治法
// 关键步骤：依据一个中间元素，对数组进行一个分离，把小于的元素都放到左边（但是不保证有序的）
// 把大于的元素都放到右边
const quickSort = (arr, start, end) => {
    if (!Array.isArray(arr)) {
        throw new Error('type error')
    }
    if (arr.length <= 1 || start >= end) {
        return
    }
    const partition = (array, start, end) => {
        // 首先选取第一个元素作为 中间元素
        let mid = array[start]
        while (start < end) {
            // 首先移动右指针
            while (start < end && array[end] >= mid) {
                end--
            }
            // 这里就是遇到 end 指针遇到比 mid 小的元素了 需要交换
            arr[start] = arr[end]

            while (start < end && array[start] < mid) {
                start++
            }
            arr[end] = arr[start]
        }
        // 讲中间元素放进去 这时候 start === end
        arr[start] = mid
        return start
    }
    let baseIndex = partition(arr, start, end)
    // 递归排序 左边元素 
    quickSort(arr, start, baseIndex - 1)
    // 递归排序 右边元素
    quickSort(arr, baseIndex + 1, end)
}

const quickSort_ = (arr) => {
    const partition = (arr, start, end) => {
        let mid = arr[start]
        while (start < end) {
            while (start < end && arr[end] >= mid) {
                end--
            }
            arr[start] = arr[end]
            while (start < end && arr[start] < mid) {
                start++
            }
            arr[end] = arr[start]
        }
        arr[start] = mid
        return start
    }
    const sort = (arr, start, end) => {
        if (arr.length === 0 || start >= end) {
            return
        }
        let baseIndex = partition(arr, start, end)
        sort(arr, start, baseIndex - 1)
        sort(arr, baseIndex + 1, end)
    }
    // 需要注意边界条件
    sort(arr, 0, arr.length - 1)
    return arr
}
const arrTest = [5, 3, 8, 1, 2]
quickSort(arrTest, 0, arrTest.length - 1)
console.log(arrTest)

const arrTest_ = [9, 8, 7, 6, 5]
const result_ = quickSort_(arrTest_)
console.log(result_)