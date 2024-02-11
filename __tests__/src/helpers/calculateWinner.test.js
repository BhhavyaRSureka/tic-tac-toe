// ********RoostGPT********
// Test generated by RoostGPT for test ReactTest using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
import calculateWinner from '../../src/helpers/calculateWinner.js';

describe('calculateWinner', () => {
  test('should return "X" as the winner if "X" occupies the top row', () => {
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
    expect(calculateWinner(squares)).toBe('X');
  });
  
  test('should return "O" as the winner if "O" occupies a diagonal', () => {
    const squares = ['O', null, 'X', null, 'O', 'X', null, null, 'O'];
    expect(calculateWinner(squares)).toBe('O');
  });

  test('should return null if there is no winner', () => {
    const squares = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    expect(calculateWinner(squares)).toBeNull();
  });

  test('should handle an empty board by returning null', () => {
    const squares = Array(9).fill(null);
    expect(calculateWinner(squares)).toBeNull();
  });

  test('should return null if only part of a line is occupied', () => {
    const squares = [null, null, null, 'X', 'X', null, null, null, null];
    expect(calculateWinner(squares)).toBeNull();
  });

  test('should return the winner if a line is completed with the last move', () => {
    const squares = ['O', 'O', null, 'X', 'X', 'X', 'O', 'X', 'O'];
    expect(calculateWinner(squares)).toBe('X');
  });

  // You can add more test cases for other rows, columns, and diagonals

  test('should throw an error for invalid input', () => {
    const invalidInput = 'Not an array';
    expect(() => calculateWinner(invalidInput)).toThrow(TypeError);
  });

  test('should throw an error for an array of incorrect size', () => {
    const invalidSizeArray = Array(5).fill(null);
    expect(() => calculateWinner(invalidSizeArray)).toThrow(Error);
  });
  
  // Optional: You can add a test case for a scenario where the function is passed a null or undefined
});

