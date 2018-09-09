import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App.jsx'

const players = [
  {
    name: 'Player 1',
    keySet: {
      A: '2',
      B: '3',
      LEFT: 'A'
    }
  },
  {
    name: 'Player 2',
    keySet: {
      A: '7',
      B: '8',
      LEFT: 'J'
    }
  }
]

ReactDOM.render(<App players={players} />, document.getElementById('root'))
