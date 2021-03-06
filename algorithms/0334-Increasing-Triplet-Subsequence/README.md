## [334. Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/description/)

### Description

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

> Return true if there exists _i, j, k _
> such that _arr[i]_ < _arr[j]_ < _arr[k]_ given 0 ≤ _i_ < _j_ < _k_ ≤ _n_-1 else return false.

Your algorithm should run in O(_n_) time complexity and O(_1_) space complexity.

**Examples:**
Given `[1, 2, 3, 4, 5]`,
return `true`.

Given `[5, 4, 3, 2, 1]`,
return `false`.

**Difficulty:** `Medium`

**Tags:**

### Solution One - In Top Solutions

[Clean and short, with comments, C++](https://discuss.leetcode.com/topic/37281/clean-and-short-with-comments-c)

```c++
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int c1 = INT_MAX;
        int c2 = INT_MAX;
        for (int i : nums)
        {
            if (i <= c1)
            {
                c1 = i;
            }
            else if (i <= c2)
            {
                c2 = i;
            }
            else
            {
                return true;
            }
        }
        return false;
    }
};
```
