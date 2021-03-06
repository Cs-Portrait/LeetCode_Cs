## [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/#/description)

### Description

Given an array *S* of *n* integers, find three integers in *S* such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

```
For example, given array S = {-1 2 1 -4}, and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

**Difficulty:** `Medium`

**Tags:** `Array` `Two Pointers`

### Solution One - In Top Solutions

思路与*3Sum*思路相似，故此处不介绍

```c++
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        if (nums.size() <= 3)
        {
            return accumulate(nums.begin(), nums.end(), 0);
        }
        sort(nums.begin(), nums.end());
          // result 可取任意 nums 中任意三个数的值，
        int result = nums[0] + nums[1] + nums[3];
          /*
           * 下面思路与 3Sum 题目类似
           * 对任意 nums[i]，我们需要寻找一对 nums[front]、nums[back]
           * 让 abs(nums[i] + nums[front] + nums[back] - target) 的值最小
           * 如果三个数的和大于 target，则 back = back - 1
           * 否则 front = front + 1
           */
        for (int i = 0; i < nums.size(); i++)
        {
            int front = i + 1;
            int back = nums.size() - 1;
            while (front < back)
            {
                int sum = nums[i] + nums[front] + nums[back];
                if (abs(target - result) > abs(target - sum))
                {	// 若找到更小的距离，则更新 result
                    result = sum;
                    if (result == target)
                    {
                        return result;
                    }
                }
                (sum > target) ? --back : ++front;
            }
        }
        return result;
    }
};
```
