## [290. Word Pattern](https://leetcode.com/problems/word-pattern/#/description)

### Description

Given a `pattern` and a string `str`, find if `str` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `str`.

**Examples:**

1. pattern = `"abba"`, str = `"dog cat cat dog"` should return true.
2. pattern = `"abba"`, str = `"dog cat cat fish"` should return false.
3. pattern = `"aaaa"`, str = `"dog cat cat dog"` should return false.
4. pattern = `"abba"`, str = `"dog dog dog dog"` should return false.

**Notes:**
You may assume `pattern` contains only lowercase letters, and `str` contains lowercase letters separated by a single space.

**Difficulty:** `Easy`

**Tags:** `Hash Table`

### Solution One

检查`pattern[i]`是否第一次出现，若不是，则检查对应`string`是否与`str`相同

若`psyyrtn[i]`是第一次出现 ，则检查`str`是否第一次出现

两个都是第一次出现，则添加到`Set`中

```c++
class Solution {
public:
    bool wordPattern(string pattern, string str) {
        map<char, string> dict;
        set<string> isExist;
        istringstream iss(str);
        string s;
        size_t i = 0;
        for (; i < pattern.size() && iss >> s; i++)
        {
            if (dict.find(pattern[i]) != dict.end())
            {	// pattern[i] is not first to appear
                if (dict[pattern[i]] != s)
                {	// Is corresponding string right?
                    return false;
                }
            }
            else if (isExist.find(s) != isExist.end())
            {	// pattern[i] is first to appear
                // So, check whether the corresponding string is first to appear
                return false;
            }
            else
            {
                dict[pattern[i]] = s;
                isExist.insert(s);
            }
        }
        if (i != pattern.size())
        {	// The length of str is less than pattern's
            return false;
        }
        else if (iss >> s)
        {	// The length of str is greater than pattern's
            return false;
        }
        return true;
    }
};
```

### Solution Two - In Top Solutions

[0ms C++ solution using istringstream and double maps](https://discuss.leetcode.com/topic/26313/0ms-c-solution-using-istringstream-and-double-maps)

- `s2c[vs[i]] == 0` 用来检查第`i`个单词是否第一次出现
- `c2s[pattern[i]] == ""`，如果单词第一次出现，检查`pattern[i]`是否第一次出现

以上两个判断，保证 `vs[i]` 和 `pattern[i]` 一一对应

```c++
class Solution {
public:
    bool wordPattern(string pattern, string str) {
        istringstream strcin(str);
        string s;
        vector<string> vs;
        while(strcin >> s) vs.push_back(s);
        if (pattern.size() != vs.size()) return false;
        map<string, char> s2c;
        map<char, string> c2s;
        for (int i = 0; i < vs.size(); ++i) {
            if (s2c[vs[i]] == 0 && c2s[pattern[i]] == "") {
                s2c[vs[i]] = pattern[i];
                c2s[pattern[i]] = vs[i];
                continue;
            }
            if (s2c[vs[i]] != pattern[i]) return false;
        }
        return true;
    }
};
```
