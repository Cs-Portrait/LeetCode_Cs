## [717. 1-bit and 2-bit Characters](https://leetcode.com/problems/1-bit-and-2-bit-characters/description/#)

### Description

We have two special characters. The first character can be represented by one bit `0`. The second character can be represented by two bits (`10` or `11`).

Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.

**Example 1:**

```
Input:
bits = [1, 0, 0]
Output: True
Explanation:
The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.

```

**Example 2:**

```
Input:
bits = [1, 1, 1, 0]
Output: False
Explanation:
The only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.

```

**Note:**

- `1 <= len(bits) <= 1000`.
- `bits[i]` is always `0` or `1`.

**Difficulty:** `Easy`

**Tags:** `Array`

### Solution One

```c++
class Solution {
public:
    bool isOneBitCharacter(vector<int>& bits) {
        bool isOnebit = true;
        for (size_t i = 0; i < bits.size(); i++) {
            if (bits[i] == 0) {
                isOnebit = true;
            } else {
                isOnebit = false;
                i++;
            }
        }

        return isOnebit;
    }
};
```

### Solutions

[717. 1-bit and 2-bit Characters - Solution](https://leetcode.com/problems/1-bit-and-2-bit-characters/solution/)
