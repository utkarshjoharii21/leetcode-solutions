// Problem: Two Sum
// Platform: LeetCode
// Link: https://leetcode.com/problems/two-sum/
// Difficulty: Easy

var twoSum = function(nums , target) {
    const map = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(target - num in map) {
            return[i, map[target - num]];
        }
        map[num] = i;
    }
};
