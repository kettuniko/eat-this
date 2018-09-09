import React from 'react'
import { compose, map, prop } from 'ramda'
import { Player } from './Player.jsx'

export const App = compose(
  map(player => <Player key={player.name} {...player} />),
  prop('players')
)
