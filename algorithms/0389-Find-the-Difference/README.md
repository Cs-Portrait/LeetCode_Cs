## [389. Find the Difference](https://leetcode.com/problems/find-the-difference/#/description)

### Description

Given two strings **s** and **t** which consist of only lowercase letters.

String **t** is generated by random shuffling string **s** and then add one more letter at a random position.

Find the letter that was added in **t**.

**Example:**

```
Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.
```

**Difficulty:** `Easy`

**Tags:** `Hash Table` `Bit Manipulation`

### Solution One

使用异或`^`性质

即`A ^ A = 0`

```c++
class Solution {
public:
    char findTheDifference(string s, string t) {
        int result = 0;
        for (size_t i = 0; i < s.size(); i++)
        {
            result ^= s[i];
        }
        for (size_t i = 0; i < t.size(); i++)
        {
            result ^= t[i];
        }
        return result;
    }
};
```

### Solution Two

```c++
class Solution {
public:
    char findTheDifference(string s, string t) {
        char result = t[t.size() - 1];
        for (size_t i = 0; i < s.size(); i++)
        {
            result ^= s[i];
            result ^= t[i];
        }
        return result;
    }
};
```
