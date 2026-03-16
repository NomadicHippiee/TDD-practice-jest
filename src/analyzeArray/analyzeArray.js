export function analyzeArray(array) {
  // Calculate the sum of all numbers
  const sum = array.reduce((acc, num) => acc + num, 0);
  
  // Create the result object
  return {
    average: sum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  };
}