import PropTypes from 'prop-types'
import { compose, inc, objOf, prop } from 'ramda'
import React, { Component, Fragment } from 'react'
import { GameActions } from './GameActions.jsx'
import { keySetProps } from './types/key-set'

export class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {
      aCount: 0,
      bCount: 0,
      leftCount: 0
    }

    this.increaseCount = this.increaseCount.bind(this)
  }

  increaseCount(propName) {
    const incProp = compose(
      objOf(propName),
      inc,
      prop(propName)
    )

    this.setState(incProp)
  }

  render() {
    const { name } = this.props
    const { aCount, bCount, leftCount } = this.state
    return (
      <Fragment>
        <GameActions
          keySet={this.props.keySet}
          onA={() => this.increaseCount('aCount')}
          onB={() => this.increaseCount('bCount')}
          onLeft={() => this.increaseCount('leftCount')}
        />
        <div>
          {name}: {aCount} {bCount} {leftCount}
        </div>
      </Fragment>
    )
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  keySet: keySetProps.isRequired
}
