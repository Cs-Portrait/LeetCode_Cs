## [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/#/description)

### Description

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

**Example 1:**

```
Input:
    Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
         3
        / \
       4   5
      / \   \
     5   4   7

```

**Note:** The merging process must start from the root nodes of both trees.

**Difficulty:** `Easy`

**Tags:** `Tree`

### Solution One

```c++
class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if (t1 || t2)
        {
            int val = 0;
            val += t1 ? t1->val : 0;
            val += t2 ? t2->val : 0;
            TreeNode *root = new TreeNode(val);
            root->left = mergeTrees(t1 ? t1->left : nullptr, t2 ? t2->left : nullptr);
            root->right = mergeTrees(t1 ? t1->right : nullptr, t2 ? t2->right : nullptr);
            return root;
        }
        return nullptr;
    }
};
```

### Solution Two - In Top Solutions

```c++
class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if (t1 && t2)
        {
            int val = 0;
            val += t1 ? t1->val : 0;
            val += t2 ? t2->val : 0;
            TreeNode *root = new TreeNode(val);
            root->left = mergeTrees(t1 ? t1->left : nullptr, t2 ? t2->left : nullptr);
            root->right = mergeTrees(t1 ? t1->right : nullptr, t2 ? t2->right : nullptr);
            return root;
        }
        else
        {
            return t1 ? t1 : t2;
        }
    }
};
```
