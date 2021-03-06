## [606. Construct String from Binary Tree](https://leetcode.com/problems/construct-string-from-binary-tree/#/description)

### Description

You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

**Example 1:**

```
Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /
  4

Output: "1(2(4))(3)"

Explanation: Originallay it needs to be "1(2(4)())(3()())",
but you need to omit all the unnecessary empty parenthesis pairs.
And it will be "1(2(4))(3)".
```

**Example 2:**

```
Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4

Output: "1(2()(4))(3)"

Explanation: Almost the same as the first example,
except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
```

**Difficulty:** `Easy`

**Tags:** `Tree` `String`

### Solution One

```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    string tree2str(TreeNode* t) {
        string result;
        if (t != NULL)
        {
            doTree2Str(t, result);
        }
        return result;
    }

private:
    void doTree2Str(TreeNode *t, string &s)
    {
        s += to_string(t->val);
        // if t has child node
        if (t->left || t->right)
        {
            s += '(';
            if (t->left)
            {
                doTree2Str(t->left, s);
            }
            s += ')';
            if (t->right)
            {
                s += '(';
                doTree2Str(t->right, s);
                s += ')';
            }
        }
    }
};
```

### Solution Two - In Top Solutions

```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    string tree2str(TreeNode* t) {
        if (t == NULL)
        {
            return "";
        }
        string result = to_string(t->val);
        if (t->left)
        {
            result += '(' + tree2str(t->left) + ')';
        }
        else if (t->right)
        {
            result += "()";
        }
        if (t->right)
        {
            result += '(' + tree2str(t->right) + ')';
        }
        return result;
    }
};
```
