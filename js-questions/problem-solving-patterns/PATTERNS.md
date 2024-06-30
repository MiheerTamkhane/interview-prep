# Problem Solving Patterns.

## Frequency Counter Pattern.

1. Write a program to compare two arrays and the second array should be the exact replication of first array with square of each number.

   Ex. [1, 2, 3] => [1, 4, 9];

2. Write isAnagram() with this pattern.

## Mutlipointer Pattern.

1. Given sorted array find the first two pair of numbers which gives 0 result after addition.

   Ex. [-3, -2, -1, 0, 1, 2, 4] => [-2, 2] = 0;

2. Implement a function called _countUniqueValues_, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

   Ex. countUniqueValues([1,1,1,1,1,2]) // 2
   Ex. countUniqueValues([1,2,3,4,4,4,7,7,12,12,14]) // 7
   Ex. countUniqueValues([-2, -1, -1, 0, 1]) // 7

## Sliding Window Pattern

1. Find the longest unique characters of string.

Ex. 'hellothers' => "lother".

2. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

Ex. maxSubarraySum([1,3,5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
