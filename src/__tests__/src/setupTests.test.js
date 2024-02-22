// ********RoostGPT********
// Test generated by RoostGPT for test ReactTesting123 using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
// src/__tests__/src/Board.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Board from '../../components/board/Board';

describe('Board Component', () => {
  let onClickMock;
  let jumpToMock;
  let squares;

  beforeEach(() => {
    // Set up some mocked out values and functions before each test
    onClickMock = jest.fn();
    jumpToMock = jest.fn();
    squares = Array(9).fill(null);
  });

  test('renders all squares', () => {
    const { getAllByTestId } = render(<Board squares={squares} onClick={onClickMock} jumpTo={jumpToMock} />);
    const squareElements = getAllByTestId('square');
    expect(squareElements.length).toBe(9);
  });

  test('calls onClick when a square is clicked', () => {
    const { getByTestId } = render(<Board squares={squares} onClick={onClickMock} jumpTo={jumpToMock} />);
    const square = getByTestId('square-0');
    fireEvent.click(square);
    expect(onClickMock).toHaveBeenCalledWith(0);
  });

  test('restarts the game when the restart button is clicked', () => {
    const { getByText } = render(<Board squares={squares} onClick={onClickMock} jumpTo={jumpToMock} />);
    fireEvent.click(getByText('Restart the game'));
    expect(jumpToMock).toHaveBeenCalledWith(0);
  });

  test('renders the correct state of the squares', () => {
    squares[0] = 'X';
    const { getByTestId } = render(<Board squares={squares} onClick={onClickMock} jumpTo={jumpToMock} />);
    const square = getByTestId('square-0');
    expect(square).toHaveTextContent('X');
  });
});
