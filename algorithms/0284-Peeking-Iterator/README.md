## [284. Peeking Iterator](https://leetcode.com/problems/peeking-iterator/description/)

### Description

Given an Iterator class interface with methods: `next()` and `hasNext()`, design and implement a PeekingIterator that support the `peek()` operation -- it essentially peek() at the element that will be returned by the next call to next().

---

Here is an example. Assume that the iterator is initialized to the beginning of the list: `[1, 2, 3]`.

Call `next()` gets you 1, the first element in the list.

Now you call `peek()` and it returns 2, the next element. Calling `next()` after that **\*still\*** return 2.

You call `next()` the final time and it returns 3, the last element. Calling `hasNext()` after that should return false.

**Follow up**: How would you extend your design to be generic and work with all types, not just integer?

**Difficulty:** `Medium`

**Tags:** `Design`

### Solution One

```c++
// Below is the interface for Iterator, which is already defined for you.
// **DO NOT** modify the interface for Iterator.
class Iterator {
    struct Data;
	Data* data;
public:
	Iterator(const vector<int>& nums);
	Iterator(const Iterator& iter);
	virtual ~Iterator();
	// Returns the next element in the iteration.
	int next();
	// Returns true if the iteration has more elements.
	bool hasNext() const;
};


class PeekingIterator : public Iterator {
public:
    PeekingIterator(const vector<int>& nums) : Iterator(nums) {
        // Initialize any member here.
        // **DO NOT** save a copy of nums and manipulate it directly.
        // You should only use the Iterator interface methods.
        peeking = false;
        val = 0;
    }

    // Returns the next element in the iteration without advancing the iterator.
    int peek() {
        if (peeking)
        {
            return val;
        }
        else
        {
            val = Iterator::next();
            peeking = true;
            return val;
        }
    }

    // hasNext() and next() should behave the same as in the Iterator interface.
    // Override them if needed.
    int next() {
        if (peeking)
        {
            peeking = false;
            return val;
        }
        else
            return Iterator::next();
    }

    bool hasNext() const {
        if (peeking)
            return true;
        else
            return Iterator::hasNext();
    }

private:
    bool peeking;
    int val;
};
```
