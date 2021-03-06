## [48. Rotate Image](https://leetcode.com/problems/rotate-image/#/description)

### Description

You are given an _n_ x _n_ 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?

**Difficulty:** `Medium`

**Tags:** `Array`

### Solution One

(0, 0) → (0, n-1)

(0, n-1) → (n-1, n-1)

(n-1, n-1) → (n-1, 0)

(n-1, 0) → (0, 0)

规律为(i, j) → (j, n - 1 - i)

每个 do ... while 循环都执行类似以上操作

```c++
class Solution
{
  public:
    void rotate(vector<vector<int>> &matrix)
    {
        size_t isOdd = matrix.size() % 2; // Is n odd number?
        size_t length = matrix.size() / 2;
        for (size_t i = 0; i < length; i++)
        {
            for (size_t j = 0; j < length + isOdd; j++)
            { // cur means current, not cursor
                int curVal;
                int preVal = matrix[i][j];
                int cur_i = j, cur_j = matrix.size() - 1 - i;
                int tmp_i, tmp_j;
                do
                {
                    curVal = matrix[cur_i][cur_j]; // save the current element's value
                    matrix[cur_i][cur_j] = preVal;
                    preVal = curVal;
                    tmp_i = cur_j;
                    tmp_j = matrix.size() - 1 - cur_i;
                    cur_i = tmp_i;
                    cur_j = tmp_j;
                } while (cur_i != j || cur_j != matrix.size() - 1 - i);
            }
        }
    }
};
```

### Solution Two - In Top Solutions

First we transpose the matrix and then reverse every row:

```c++
class Solution {
public:
    void rotate(vector<vector<int>>& m) {
        int n = m.size();

        for(int i=0; i<n; i++)
            for(int j=0; j<i; j++)
                swap(m[i][j], m[j][i]);

        for(int i=0; i<n; i++)
            reverse(m[i].begin(), m[i].end());
    }
};
```

### Solution Three - In Top Solutions

```c++
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size();
        int a = 0;
        int b = n-1;
        while(a<b){
            for(int i=0;i<(b-a);++i){
                swap(matrix[a][a+i], matrix[a+i][b]);
                swap(matrix[a][a+i], matrix[b][b-i]);
                swap(matrix[a][a+i], matrix[b-i][a]);
            }
            ++a;
            --b;
        }
    }
};
```
