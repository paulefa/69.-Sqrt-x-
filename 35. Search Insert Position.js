var searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let middle = Math.floor((r + l) / 2);
    if (nums[l] > target) return 0;
    if (nums[r] < target) return r + 1;
    while (nums[middle] !== target && l < r) {
        if (nums[middle] < target) {
            l = middle + 1;
        } else {
            r = middle;
        }
        middle = Math.floor((r + l) / 2);
    }
    return middle;
};