import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { GameActions } from './GameActions.jsx'
import { keySetProps } from './key-set'

export class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {
      aCount: 0,
      bCount: 0,
      leftCount: 0
    }

    this.handleA = this.handleA.bind(this)
    this.handleB = this.handleB.bind(this)
    this.handleLeft = this.handleLeft.bind(this)
  }

  handleA() {
    this.setState(state => ({
      aCount: state.aCount + 1
    }))
  }

  handleB() {
    this.setState(state => ({
      bCount: state.bCount + 1
    }))
  }

  handleLeft() {
    this.setState(state => ({
      leftCount: state.leftCount + 1
    }))
  }

  render() {
    const { name } = this.props
    const { aCount, bCount, leftCount } = this.state
    return (
      <Fragment>
        <GameActions
          keySet={this.props.keySet}
          onA={this.handleA}
          onB={this.handleB}
          onLeft={this.handleLeft}
        />
        <div>
          {name}: {aCount} {bCount} {leftCount}
        </div>
      </Fragment>
    )
  }
}

Player.propTypes = {
  name: PropTypes.string,
  keySet: keySetProps
}
