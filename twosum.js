/*
Two Sum
Easy

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let k = i+1; k< nums.length; k++){
            if (nums[i] + nums [k] == target){
                return [i, k]
            } 
        }
    }
};
// Runtime is n^2, space complexity O(1)


//better runtime version: using a hashmap: runtime n,  space complexity is O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = [];
    for (let i = 0; i < nums.length; i++){ 
        numMap[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++){
        let s = target - nums[i];
        if (numMap[s] !== undefined && numMap[s] !== i){
            let k = numMap[s];
            return [i,k];
        }  
    }
}