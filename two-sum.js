var twoSum = function(nums, target) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - nums in map) {
            return [i, map[target - num]];
        }
        map[num] = i;
    }
};