## [504. Base 7](https://leetcode.com/problems/base-7/#/description)

### Description

Given an integer, return its base 7 string representation.

**Example 1:**

```
Input: 100
Output: "202"

```

**Example 2:**

```
Input: -7
Output: "-10"
```

**Note:** The input will be in range of [-1e7, 1e7].

**Difficulty:** `Easy`

**Tags:**

### Solution One

```c++
class Solution {
public:
    string convertToBase7(int num) {
        if (num < 0)
        {
            return '-' + doConvert(-num);
        }
        else
        {
            return doConvert(num);
        }
    }

private:
    string doConvert(int num)
    {
        char tmp;
        string result;
        do
        {
            tmp = num % 7 + '0';
            result = tmp + result;
            num /= 7;
        } while (num != 0);
        return result;
    }
};
```

### Solution Two - In Top Solutions

```c++
class Solution {
public:
    string convertToBase7(int num) {
        int tmp = abs(num);
        string result;
        do
        {
            result = to_string(tmp % 7) + result;
            tmp /= 7;
        } while (tmp != 0);
        if (num < 0)
        {
            result = '-' + result;
        }
        return result;
    }
};
```

### Solution Three - In Top Solutions

在**One**和**Two**中，是将新的字符添加到`result`前面，然而对于 string 类来说，在前面添加字符，可能花费更多时间，故这里将字符添加到`result`后面，最后用`std::reverse`函数来逆转

```c++
class Solution {
public:
    string convertToBase7(int num) {
        int tmp = abs(num);
        string result;
        do
        {
            result.push_back(char(tmp % 7 + '0'));
            tmp /= 7;
        } while (tmp != 0);
        if (num < 0)
        {
            result = result + '-';
        }
        reverse(result.begin(), result.end());
        return result;
    }
};
```
