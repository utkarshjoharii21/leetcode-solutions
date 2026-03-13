// Problem: Remove Duplicates From Sorted Array
// Platform: LeetCode
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Difficulty: Easy
var removeDuplicatesSortedArray = function(nums) {
    let i = 1;

    for(let j = 1; j < nums.length; i++) {
        if(nums[j] !== nums[i - 1]) {
            nums[i] == nums[j];
            i++;
        }
    }
    return i;
};
