import binarySearchWithLoops from './binary-search.js';

console.assert(binarySearchWithLoops([], 2), -1);
console.assert(binarySearchWithLoops([1], 1), 0);
console.assert(binarySearchWithLoops([1], 2), -1);
console.assert(binarySearchWithLoops([1,2,3], 2), 1);
console.assert(binarySearchWithLoops([1,2,3], 3), 2);
console.assert(binarySearchWithLoops([1,2,3], 4), -1);
console.assert(binarySearchWithLoops([1,2,3,7], 3), 2);