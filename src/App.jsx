import React, { Fragment } from 'react'
import { map } from 'ramda'
import { Player } from './Player.jsx'
import players from './players'

export const App = () => (
  <Fragment>
    {map(
      player => (
        <Player key={player.name} {...player} />
      ),
      players
    )}
  </Fragment>
)
