const strings = ['a', 'b', 'c', 'd', 'e', 'f'];

// Push
strings.push('g'); //O(1) --> Constant time

// Pop
strings.pop(); //O(1) --> Constant time

// Unshift
strings.unshift('x'); //O(n) --> Linear time

// Splice
strings.splice(2, 0, 'alien'); //O(n) --> Linear time
