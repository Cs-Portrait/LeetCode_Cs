## [491. Increasing Subsequences](https://leetcode.com/problems/increasing-subsequences/#/description)

### Description

Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2 .

**Example:**

```
Input: [4, 6, 7, 7]
Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]

```

**Note:**

1. The length of the given array will not exceed 15.
2. The range of integer in the given array is [-100,100].
3. The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.

**Difficulty:** `Medium`

**Tags:** `Depth-first Search`

### Solution One

```c++
class Solution {
public:
    vector<vector<int>> findSubsequences(vector<int>& nums) {
        if (nums.empty())
        {
            return result;
        }
        vector<int> seq(1);
        for (size_t i = 0; i < nums.size()-1; i++)
        {
            seq[0] = nums[i];
            getSequence(seq, i, nums);
        }
        return result;
    }

private:
    vector<vector<int>> result;
    set <vector<int>> dict;
    void getSequence(vector<int> &seq, size_t &index, vector<int> &nums)
    {
        for (size_t i = index + 1; i < nums.size(); i++)
        {
            if (nums[i] >= seq.back())
            {
                vector<int> tmp = seq;
                tmp.push_back(nums[i]);
                if (dict.find(tmp) == dict.end())
                {
                    dict.insert(tmp);
                    result.push_back(tmp);
                }
                getSequence(tmp, i, nums);
            }
        }
    }
};
```

### Solution Two - In Top Solutions

```c++
class Solution {
public:
    vector<vector<int>> findSubsequences(vector<int>& nums) {
        vector<vector<int>> res;
        vector<int> seq;
        dfs(res, seq, nums, 0);
        return res;
    }

    void dfs(vector<vector<int>>& res, vector<int>& seq, vector<int>& nums, int pos) {
        if(seq.size() > 1) res.push_back(seq);
        unordered_set<int> hash;
        for(int i = pos; i < nums.size(); ++i) {
            if((seq.empty() || nums[i] >= seq.back()) && hash.find(nums[i]) == hash.end()) {
                seq.push_back(nums[i]);
                dfs(res, seq, nums, i + 1);
                seq.pop_back();
                hash.insert(nums[i]);
            }
        }
    }
};

```
