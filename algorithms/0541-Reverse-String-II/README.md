## [541. Reverse String II](https://leetcode.com/problems/reverse-string-ii/#/description)

### Description

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

**Example:**

```
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

```

Restrictions:

1. The string consists of lower English letters only.
2. Length of the given string and k will in the range [1, 10000]

**Difficulty:** `Easy`

**Tags:** `String`

### Solution One

```c++
class Solution {
public:
    string reverseStr(string s, int k) {
        if (s.empty() || k == 1)
        {
            return s;
        }
        size_t first = 0, last = k;
        while (last <= s.size())
        {
            reverse(&s[first], &s[last]);
            first = last + k;
            last += 2 * k;
        }
        if (first < s.size())
        {
            reverse(&s[first], &s[s.size()]);
        }
        return s;
    }
};
```

### Solution Two - In Top Solutions

```c++
class Solution {
public:
    string reverseStr(string s, int k) {
        for (size_t i = 0; i < s.size(); i += 2 * k)
        {
            reverse(s.begin() + i, min(s.begin() + i + k, s.end()));
        }
        return s;
    }
};
```
