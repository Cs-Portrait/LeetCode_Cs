## [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/#/description)

### Description

Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

![img](http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

```
Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**Note:**
Although the above answer is in lexicographical order, your answer could be in any order you want.

**Difficulty:** `Medium`

**Tags:** `Backtracking` `String`

### Solution One - In Top Solutions

Simple and efficient iterative solution.

Explanation with sample input "123"

Initial state:

- result = {""}

Stage 1 for number "1":

- result has {""}
- candiate is "abc"
- generate three strings ""+"a",""+"b", ""+"c" and put into tmp,
  tmp = {"a", "b","c"}
- swap result and tmp (swap does not take memory copy)
- Now result has {"a", "b", "c"}

Stage 2 for number "2":

- result has {"a", "b", "c"}
- candidate is "def"
- generate nine strings and put into tmp,
  "a" + "d", "a"+"e", "a"+"f",
  "b" + "d", "b"+"e", "b"+"f",
  "c" + "d", "c"+"e", "c"+"f"
- so tmp has {"ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"}
- swap result and tmp
- Now result has {"ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"}

Stage 3 for number "3":

- result has {"ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"}
- candidate is "ghi"
- generate 27 strings and put into tmp,
- add "g" for each of "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"
- add "h" for each of "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"
- add "h" for each of "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"
- so, tmp has
  {"adg", "aeg", "afg", "bdg", "beg", "bfg", "cdg", "ceg", "cfg"
  "adh", "aeh", "afh", "bdh", "beh", "bfh", "cdh", "ceh", "cfh"
  "adi", "aei", "afi", "bdi", "bei", "bfi", "cdi", "cei", "cfi" }
- swap result and tmp
- Now result has
  {"adg", "aeg", "afg", "bdg", "beg", "bfg", "cdg", "ceg", "cfg"
  "adh", "aeh", "afh", "bdh", "beh", "bfh", "cdh", "ceh", "cfh"
  "adi", "aei", "afi", "bdi", "bei", "bfi", "cdi", "cei", "cfi" }

Finally, return result.

```c++
class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if (digits.empty())
        {
            return vector<string>{};
        }
        else if (find(digits.begin(), digits.end(), '0') != digits.end())
        {
            return vector<string>{};
        }
        else if (find(digits.begin(), digits.end(), '1') != digits.end())
        {
            return vector<string>{};
        }
        vector<string> result{""};
        vector<string> phoneNumber = { "","", "abc","def","ghi","jkl","mno","pqrs","tuv","wxyz" };
        for (size_t i = 0; i < digits.size(); i++)
        {
            size_t index = digits[i] - '0';
            const string &s = phoneNumber[index];
            vector<string> temp;
            for (size_t j = 0; j < s.size(); j++)
            {
                for (size_t k = 0; k < result.size(); k++)
                {
                    temp.push_back(result[k] + s[j]);
                }
            }
            swap(temp, result);
        }
        return result;
    }
};
```
