var twoSum = function (nums, target) {
    const id = []
    nums.filter((item,) => {
        nums.forEach((elem, i) => {
            elem + item == target && nums.length == 2 || elem + item == target && i != 0 ? id.push(i) : null
        });
    });
    return id.reverse()
};


console.log(twoSum([3, 2, 4], 6))



// nums.reverse().findIndex(elem => { elem + item == target })
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
