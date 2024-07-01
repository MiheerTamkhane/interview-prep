# Problem Solving Patterns.

## Frequency Counter Pattern.

1. Write a program to compare two arrays and the second array should be the exact replication of first array with square of each number.

   Ex. [1, 2, 3] => [1, 4, 9];

2. Write isAnagram() with this pattern.

3. Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

   Examples:
   sameFrequency(182,281) // true
   sameFrequency(34,14) // false
   sameFrequency(3589578, 5879385) // true
   sameFrequency(22,222) // false

4. Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

   Examples:
   areThereDuplicates(1, 2, 3) // false
   areThereDuplicates(1, 2, 2) // true
   areThereDuplicates('a', 'b', 'c', 'a') // true

## Mutlipointer Pattern.

1. Given sorted array find the first pair of numbers which gives 0 result after addition.

   Ex. [-3, -2, -1, 0, 1, 2, 4] => [-2, 2] = 0;

2. Implement a function called _countUniqueValues_, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

   Ex. countUniqueValues([1,1,1,1,1,2]) // 2
   Ex. countUniqueValues([1,2,3,4,4,4,7,7,12,12,14]) // 7
   Ex. countUniqueValues([-2, -1, -1, 0, 1]) // 7

3. Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

   Example: averagePair([1,2,3],2.5) // true
   averagePair([1,3,3,5,6,7,10,12,19],8) // true
   averagePair([-1,0,3,4,5,6], 4.1) // false
   averagePair([],4) // false

## Sliding Window Pattern

1. Find the longest unique characters of string.

Ex. 'hellothers' => "lother".

2. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

Ex. maxSubarraySum([1,3,5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1 ,2 ,5 ,2 ,8 ,1 ,5], 4) // 17

## Divide and Conquer

1. Find the number/target in an array using binarySearch algorithm, O(log n)
