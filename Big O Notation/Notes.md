# Notes

## Rule Books

- Rule 1: Worst Case
- Rule 2: Remove Constant
- Rule 3: Different Terms for inputs
- Rule 4: Drop Non Dominants

## Big O Cheat Sheet

---

### -Big Os-

- O(1) Constant - no loops
- O(log N) Logarithmic - usually searching algorithms have log(n) if they are sorted (Binary Search) (not on hash map)
- O(n) Linear - for loops, while loops
- O(n \* log(n)) Log Linear - Sorting operations usually
- O(n^2) Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops
- O(n!) - you are adding a loop for every element.

**Iterating through half a collection is still O(n)
**Two separate collections: O(a + b)

### -What can cause time in a function?-

- Operators (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

### -What causes Space complexity?-

- Variables
- Data structures
- Function Call
- Allocations
