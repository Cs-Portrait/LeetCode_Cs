## [167. Tow Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#/description)

### Description

Given an array of integers that is already **sorted in ascending order**, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have _exactly_ one solution and you may not use the _same_ element twice.

**Input:** numbers={2, 7, 11, 15}, target=9
**Output:** index1=1, index2=2

**Difficulty:** `Easy`

**Tags:** `Array` `Two Pointers` `Binary Search`

### Solution One

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        map<int, int> m;
        for (int i = 0; i < numbers.size(); i++) {
            int t = target - numbers[i];
            if (m.find(t) != m.end()) {
                return vector<int>{m[t] + 1, i + 1};
            }
            m[numbers[i]] = i;
        }
    }
};
```

### Solution Two

`Two Pointer`

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        vector<int> res;
        size_t front = 0;
        size_t back = numbers.size() - 1;
        while (front < back)
        {
            int sum = numbers[front] + numbers[back];
            if (sum == target) {
                res.push_back(front + 1);
                res.push_back(back + 1);
                return res;
            } else if (sum < target) {
                front++;
            } else {
                back--;
            }
        }
    }
};
```
