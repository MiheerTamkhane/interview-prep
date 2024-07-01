function maxSubarraySum(arr, num) {
  if (num > arr.length || arr.length === 0) return null;
  let max = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let j = num; j < arr.length; j++) {
    temp = temp - arr[j - num] + arr[j];
    max = Math.max(temp, max);
  }
  return max;
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
