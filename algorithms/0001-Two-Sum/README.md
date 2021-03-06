## [1. Two Sum](https://leetcode.com/problems/two-sum/#/description)

### Description

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution.

**Example**:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,

return [0, 1].

**Difficulty:** `Easy`

**Tags:** `Array` `Hash Table`

### Solution One

最原始的办法，两层循环遍历数组，当找到 nums[i] + nums[j] == target 时，将 i，j 添加到要返回的 vector 容器，然后返回 vector 容器。

```c++
class Solution
{
public:
    std::vector<int> twoSum(std::vector<int> &nums, int target) {
        std::vector<int> tmp;
        for (size_t i = 0; i < nums.size(); i++)
        {
            for (size_t j = i+1; j < nums.size(); j++)
            {
                if (nums[i] + nums[j] == target) {
                    tmp.push_back(i);
                    tmp.push_back(j);
                    return tmp;
                }
            }
        }
        return tmp;
    }
};
```

### Solution Two

`Hash Table`

使用 Map，以值为 key，下标为 value

对于 nums[i]，我们在 Map 中查找 target - nums[i] 的值，如果找到，则相应的下标添加到 vector 容器并返回该容器

否则将值 nums[i]，i 分别当作 key，value 添加到 Map 中

**注意**：在第一次循环时（即 i = 0），Map 中没有数据，故肯定找不到，即一定会添加到 Map 中

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> m;
        vector<int> result(2);
        for (size_t i = 0; i < nums.size(); i++)
        {
            if (m.find(target - nums[i]) != m.end())
            {
                result[0] = m[target - nums[i]];
                result[1] = i;
                return result;
            }
            m[nums[i]] = i;
        }
    }
};
```

### Solution Three - In Top Solutions

`Sort` `Two Pointers`

将 值 - 索引 组成 pair 添加到 vector，对该 vector 进行排序（关键字为：值）

使用前后指针（i，j）分别指向 vector 的第一个和最后一个

若当前和大于`target`，则后指针向前移，因为和要变小，只能后指针前移（原因：已排序）

若当前和小于`target`，则前指针向后移，因为和要变大，只能前指针后移（原因：已排序）

若当前和等于`target`，则返回

```c++
class Solution {
    public:
    vector<int> twoSum(vector<int>& nums, int target) {
            size_t len = nums.size();
            vector<int> res;
            if (len < 2) return res;

            vector<pair<int, int> > num_idx;
            for (size_t i = 0; i < len; i++) {
                num_idx.push_back(pair<int, int>(nums[i], i));
            }

            sort(num_idx.begin(), num_idx.end());

            size_t i = 0, j = len - 1;
            while (i < j) {
                int s = num_idx[i].first + num_idx[j].first;
                if (s == target) {
                    res.push_back(num_idx[i].second);
                    res.push_back(num_idx[j].second);
                    break;
                } else if (s < target) {
                    i++;
                } else {
                    j--;
                }
            }

            return res;
        }
};
```
