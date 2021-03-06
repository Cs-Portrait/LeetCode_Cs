## [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/#/description)

### Description

Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given `[10, 9, 2, 5, 3, 7, 101, 18]`,
The longest increasing subsequence is `[2, 3, 7, 101]`, therefore the length is `4`. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(_n2_) complexity.

**Follow up:** Could you improve it to O(_n_ log _n_) time complexity?

**Difficulty:** `Medium`

**Tags:** `Dynamic Programming` `Binary Search`

### Solution One

动态规划-自顶向下

定义状态$F(i)$表示以$A[i]$结尾的最长上升序列,

则状态转移方程为$F(i) = max\{F(j)\}+1$, $i > j$ and $A[i] > A[j]$

```c++
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> tmp(nums.size(), 0);
        int result = 0;
        for (int i = nums.size() - 1; i >= 0; i--)
        {
            result = max(result, doLengthOfLIS(i, nums, tmp));
        }
        return result;
    }
private:
    int doLengthOfLIS(int i, vector<int> &nums, vector<int> &map)
    {
        int result = 0;
        if (map[i] != 0)
        {
            return map[i];
        }
        else if (i == 0)
        {
            result = 1;
        }
        else
        {
            for (int j = i - 1; j >= 0; j--)
            {
                if (nums[i] > nums[j])
                {
                    result = max(result, doLengthOfLIS(j, nums, map));
                }
            }
            result++;
        }
        map[i] = result;
        return result;
    }
};
```

### Solution Two

动态规划-自底向上

状态定义同思路一

```c++
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        if (nums.empty())
        {
            return 0;
        }
        vector<int> map(nums.size(), 0);
        map[0] = 1;
        int maxLength = 1;
        for (size_t i = 1; i < nums.size(); i++)
        {
            int length = 0;
            for (int j = i - 1; j >= 0; j--)
            {
                if (length > j)
                {
                    break;
                }
                if (nums[j] < nums[i])
                {
                    length = max(length, map[j]);
                }
            }
            map[i] = length + 1;
            maxLength = max(maxLength, map[i]);
        }
        return maxLength;
    }
};
```

### Solution Three

动态规划-自底向上+二叉搜索

[300. Longest Increasing Subsequence - Solution](https://leetcode.com/problems/longest-increasing-subsequence/solution/)

```c++
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> dp(nums.size());
        int maxLength = 0;
        for (auto &i : nums) {
            int index = binary_search(dp, 0, maxLength, i);
            dp[index] = i;
            if (index == maxLength) {
                maxLength++;
            }
        }
        return maxLength;
    }

private:
    // Return the index pointing where the key should be at in dp
    int binary_search(const vector<int> &dp, int start, int end, const int &key) {
        if (start >= end) {
            return end;
        }
        int mid = start + (end - start) / 2;
        if (dp[mid] == key) {
            return mid;
        }
        else if (dp[mid] > key) {
            return binary_search(dp, start, mid, key);
        }
        else {
            return binary_search(dp, mid + 1, end, key);
        }
    }
};
```
