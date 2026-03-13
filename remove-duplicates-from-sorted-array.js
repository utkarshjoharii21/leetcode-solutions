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