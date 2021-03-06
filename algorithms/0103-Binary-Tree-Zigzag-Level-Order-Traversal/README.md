## [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/#/description)

### Description

Given a binary tree, return the _zigzag level order_ traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7

```

return its zigzag level order traversal as:

```
[
  [3],
  [20,9],
  [15,7]
]
```

**Difficulty:** `Medium`

**Tags:** `Tree` `Breadth-first Search` `Stack`

### Solution One

`BFS` `Deque`

```c++
class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>> res;
        deque<TreeNode*> d;
        TreeNode *current;
        // true: left to right
        // false: right to left
        bool direction = true;
        if (root) {
            d.push_back(root);
        } else {
            return res;
        }
        while (!d.empty()) {
            vector<int> level;
            size_t length = d.size();
            if (direction) {
                // left to right
                for (size_t i = 0; i < length; i++) {
                    current = d.front();
                    d.pop_front();
                    level.push_back(current->val);
                    if (current->left) {
                        d.push_back(current->left);
                    }
                    if (current->right) {
                        d.push_back(current->right);
                    }
                }
                direction = false;
            } else {
                // right to left
                for (size_t i = 0; i < length; i++) {
                    current = d.back();
                    d.pop_back();
                    level.push_back(current->val);
                    if (current->right) {
                        d.push_front(current->right);
                    }
                    if (current->left) {
                        d.push_front(current->left);
                    }
                }
                direction = true;
            }
            res.push_back(level);
        }
        return res;
    }
};
```

### Solution Tow - In Top Solutions

`BFS` `queue`

```c++
class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>> ans;
        if (root == NULL) return ans;

        queue<TreeNode*> que;
        que.push(root);
        bool revert = false;

        while (que.size()) {
            int size = que.size();
            vector<int> row;
            for (int i = 0; i < size; i++) {
                auto pt = que.front();
                que.pop();
                row.push_back(pt->val);
                if (pt->left) que.push(pt->left);
                if (pt->right) que.push(pt->right);
            }
            if (revert) reverse(row.begin(), row.end());
            revert = !revert;
            ans.push_back(row);
        }
        return ans;
    }
};
```
