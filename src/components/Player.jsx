import { string } from 'prop-types'
import { always, times } from 'ramda'
import React, { Component, Fragment } from 'react'
import { GameActions } from './GameActions.jsx'
import { keySetProps } from '../types/key-set'

const maxSlices = 4

export class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      lastKey: null,
      leftToEat: maxSlices
    }

    this.handleActionKeyPress = this.handleActionKeyPress.bind(this)
    this.handleClearKeyPress = this.handleClearKeyPress.bind(this)
  }

  handleActionKeyPress(key) {
    const { lastKey, leftToEat, score } = this.state
    const allowedToEat = key !== lastKey
    if (allowedToEat) {
      const isFinishing = leftToEat === 1
      const currentLeftToEat = Math.max(0, leftToEat - 1)
      this.setState({
        leftToEat: currentLeftToEat,
        score: isFinishing ? score + 1 : score
      })
    }

    this.setState({ lastKey: key })
  }

  handleClearKeyPress(key) {
    this.setState({
      leftToEat: maxSlices,
      lastKey: key
    })
  }

  render() {
    const { name } = this.props
    const { score, leftToEat } = this.state
    return (
      <Fragment>
        <GameActions
          keySet={this.props.keySet}
          onA={this.handleActionKeyPress}
          onB={this.handleActionKeyPress}
          onLeft={this.handleClearKeyPress}
        />
        <div>
          {name}: {score} {times(always('🍕'), leftToEat)}
        </div>
      </Fragment>
    )
  }
}

Player.propTypes = {
  name: string.isRequired,
  keySet: keySetProps.isRequired
}
