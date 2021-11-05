// __tests__/fetch.test.js
import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Fetch from 'node-fetch'

import App from '../components/App';

describe('App', () => {
    test('renders App component and displays it', () => {
      screen.debug();
    });
  });
