// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '../components/Home'
import { Itembox } from '../components'

const Button = ({onClick, children}) => (
  <button onClick={onClick}>{children}</button>
)

test('check if walkfitness itembox exists', () => {
      render(<Home />);
      const itembox = screen.getByText("Walk Fitness")
      expect(itembox).toBeInTheDocument();
});

test('check if walkfitness itembox exists', () => {
  render(<Home />);
  const itembox = screen.getByText("Dance Fitness")
  expect(itembox).toBeInTheDocument();
});

test('check if walkfitness itembox exists', () => {
  render(<Home />);
  const itembox = screen.getByText("HRX")
  expect(itembox).toBeInTheDocument();
});

test('check if walkfitness itembox exists', () => {
  render(<Home />);
  const itembox = screen.getByText("Yoga")
  expect(itembox).toBeInTheDocument();
});

test('check if different level of yoga workouts exist',  () => {
  render(<Home />);
  const itembox1 = screen.getByText("Yoga for Beginner")
  const itembox2 = screen.getByText("Yoga for Intermediate")
  const itembox3 = screen.getByText("Yoga for Advanced")
  expect(itembox1).toBeInTheDocument();
  expect(itembox2).toBeInTheDocument();
  expect(itembox3).toBeInTheDocument();
})

test('check if Abs Smash itembox exists', () => {
  render(<Home />);
  const itembox = screen.getByText("Abs Smash")
  expect(itembox).toBeInTheDocument();
});

test('check if Core Conditioning itembox exists', () => {
  render(<Home />);
  const itembox = screen.getByText("Core Conditioning")
  expect(itembox).toBeInTheDocument();
});

test('check if HIIT: Belly Burn itembox exists', () => {
  render(<Home />);
  const itembox = screen.getByText("HIIT: Belly Burn")
  expect(itembox).toBeInTheDocument();
});
