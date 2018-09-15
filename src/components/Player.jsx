import { string } from 'prop-types'
import React, { Component, Fragment } from 'react'
import { GameActions } from './GameActions.jsx'
import { keySetProps } from '../types/key-set'

export class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      lastKey: null
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(lastKey) {
    this.setState({ lastKey })
  }

  render() {
    const { name } = this.props
    const { score, lastKey } = this.state
    return (
      <Fragment>
        <GameActions
          keySet={this.props.keySet}
          onA={this.handleKeyPress}
          onB={this.handleKeyPress}
          onLeft={this.handleKeyPress}
        />
        <div>
          {name}: {score} {lastKey}
        </div>
      </Fragment>
    )
  }
}

Player.propTypes = {
  name: string.isRequired,
  keySet: keySetProps.isRequired
}
