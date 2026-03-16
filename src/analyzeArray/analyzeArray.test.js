import { analyzeArray } from './analyzeArray.js';

test('should return correct object for standard array', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  
  expect(result.average).toBe(4);
  expect(result.min).toBe(1);
  expect(result.max).toBe(8);
  expect(result.length).toBe(6);
});