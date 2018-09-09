import PropTypes from 'prop-types'
import {
  __,
  call,
  compose,
  defaultTo,
  equals,
  find,
  head,
  last,
  prop,
  toUpper,
  when
} from 'ramda'
import { isNotNil, noop } from 'ramda-adjunct'
import { Component } from 'react'
import { keySetProps } from './key-set'

export class GameActions extends Component {
  constructor(props) {
    super(props)

    this.doActionForKey = this.doActionForKey.bind(this)
  }

  doActionForKey({ key }) {
    const { onA, onB, onLeft, keySet } = this.props
    const actions = {
      A: onA,
      B: onB,
      LEFT: onLeft
    }

    const toAction = compose(
      prop(__, actions),
      head
    )

    const doAction = compose(
      call,
      defaultTo(noop),
      when(isNotNil, toAction)
    )

    const hasKeyHandlerFor = key =>
      compose(
        equals(toUpper(key)),
        last
      )

    compose(
      doAction,
      find(hasKeyHandlerFor(key)),
      Object.entries
    )(keySet)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.doActionForKey)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown')
  }

  render() {
    return null
  }
}

GameActions.propTypes = {
  keySet: keySetProps,
  onA: PropTypes.func,
  onB: PropTypes.func,
  onLeft: PropTypes.func
}
