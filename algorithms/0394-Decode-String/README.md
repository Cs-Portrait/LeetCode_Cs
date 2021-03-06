## [394. Decode String](https://leetcode.com/problems/decode-string/#/description)

### Description

Given an encoded string, return it's decoded string.

The encoding rule is: `k[encoded_string]`, where the _encoded_string_ inside the square brackets is being repeated exactly _k_ times. Note that _k_ is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits are only for those repeat numbers, _k_. For example, there won't be input like `3a` or `2[4]`.

**Examples:**

```
s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
```

**Difficulty:** `Medium`

**Tags:** `Depth-first Search` `Stack`

### Solution One

`DFS` `Recursion`

```
(some char)    digits         [    endoce_string   ]
               ↑              ↑                    ↑
            numStart        front                 back
```

```c++
class Solution
{
  public:
    string decodeString(string s)
    {
        size_t front = s.find_first_of('[');	// Get the index of the first '['
        if (front == string::npos)
        {	// There was not '[', it means we don't need to decode the s
            return s;
        }
        // Get the index of the corresponding ']'
        size_t back = findTheCorrespondingIndex(s.substr(front + 1)) + front + 1;

        size_t numStart = s.find_first_of(digits);
        int num = stoi(s.substr(numStart, front - numStart));

        string result = s.substr(0, numStart);
        string str = decodeString(s.substr(front + 1, back - front - 1));
        for (size_t i = 0; i < num; i++)
        {
            result += str;
        }
        if (back != s.size() - 1)
        {
            return result + decodeString(s.substr(back + 1));
        }
        else
        {
            return result;
        }
    }

private:
    size_t findTheCorrespondingIndex(string s)
    {
        stack<char> stacks;
        size_t i = 0;
        int num = 0;
        while (i < s.size())
        {
            if (s[i] == '[')
            {
                num++;
            }
            else if (s[i] == ']')
            {
                num--;
                if (num == -1)
                {
                    return i;
                }
            }
            i++;
        }
    }

    string digits = "0123456789";
};
```

### Solution Two - In Top Solutions

`DFS` `Recursion`

```c++
class Solution
{
public:
    string decodeString(string s)
    {
        int i = 0;
        return decodeString(s, i);
    }

private:
    string decodeString(const string &s, int &i)
    {
        string result;
        while (i < s.size() && s[i] != ']')
        {
            if (!isdigit(s[i]))
            {
                result += s[i++];
            }
            else
            {
                int n = 0;
                while (i < s.size() && isdigit(s[i]))
                {
                    n = n * 10 + s[i++] - '0';
                }
                i++;	// '['
                string t = decodeString(s, i);
                i++;	// ']'
                while (n-- > 0)
                {
                    result += t;
                }
            }
        }
        return result;
    }
};
```
