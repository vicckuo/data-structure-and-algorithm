// T O(n^2)  S O(1)
// 插入排序
// 1. 從第二個數開始，將數字插入到前面已經排序好的數列中
// 2. 重複進行，直到最後一個數
// 3. 時間複雜度為O(n^2)，空間複雜度為O(1)
// 4. 穩定排序
// 5. 適合小數據量排序
// 6. 適合部分數據已經排序好的情況
// 7. 適合數據量小且數據基本有序的情況

function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 從第二個數開始
    let temp = arr[i]; // 要插入的數
    let j = i; // 要插入的位置
    while (j > 0 && arr[j - 1] > temp) {
      // 從後往前找，找到要插入的位置
      arr[j] = arr[j - 1]; // 往後移
      j--; // 往前找
    }
    arr[j] = temp; // 插入
  }
  return arr;
}
console.log(InsertionSort([5, 3, 8, 6, 2, 7, 1, 4]));
