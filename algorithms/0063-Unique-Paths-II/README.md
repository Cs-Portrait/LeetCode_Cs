## [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/#/description)

### Description

Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as `1` and `0` respectively in the grid.

For example,

There is one obstacle in the middle of a 3x3 grid as illustrated below.

```
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
```

The total number of unique paths is `2`.

**Note:** _m_ and _n_ will be at most 100.

**Difficulty:** `Medium`

**Tags:** `Array` `Dynamic Programming`

### Solution One

```c++
class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        if (obstacleGrid[0][0])
        {
            return 0;
        }
        size_t m = obstacleGrid.size();
        size_t n = obstacleGrid[0].size();
        vector<vector<int>> nums(m, vector<int>(n, 0));
        for (size_t i = 0; i < n; i++)
        {
            if (obstacleGrid[0][i])
            {
                break;
            }
            else
            {
                nums[0][i] = 1;
            }
        }
        for (size_t i = 0; i < m; i++)
        {
            if (obstacleGrid[i][0])
            {
                break;
            }
            else
            {
                nums[i][0] = 1;
            }
        }
        for (size_t i = 1; i < m; i++)
        {
            for (size_t j = 1; j < n; j++)
            {
                if (!obstacleGrid[i][j])
                {
                    nums[i][j] = nums[i - 1][j] + nums[i][j - 1];
                }
            }
        }
        return nums[m - 1][n - 1];
    }
};
```

### Solution Two - In Top Solutions

[Java Solution using Dynamic Programming, O(1) space](https://discuss.leetcode.com/topic/4987/java-solution-using-dynamic-programming-o-1-space)

```c++
public class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {

        //Empty case
        if(obstacleGrid.length == 0) return 0;

        int rows = obstacleGrid.length;
        int cols = obstacleGrid[0].length;

        for(int i = 0; i < rows; i++){
            for(int j = 0; j < cols; j++){
                if(obstacleGrid[i][j] == 1)
                    obstacleGrid[i][j] = 0;
                else if(i == 0 && j == 0)
                    obstacleGrid[i][j] = 1;
                else if(i == 0)
                    obstacleGrid[i][j] = obstacleGrid[i][j - 1] * 1;// For row 0, if there are no paths to left cell, then its 0,else 1
                else if(j == 0)
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] * 1;// For col 0, if there are no paths to upper cell, then its 0,else 1
                else
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            }
        }

        return obstacleGrid[rows - 1][cols - 1];

    }
}
```
