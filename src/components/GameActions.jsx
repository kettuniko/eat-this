import { func } from 'prop-types'
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
  tap,
  toUpper,
  when
} from 'ramda'
import { isNotNil, noop } from 'ramda-adjunct'
import { Component } from 'react'
import { keySetProps } from '../types/key-set'

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

    const hasKeyHandlerFor = key =>
      compose(
        equals(toUpper(key)),
        last
      )

    const findKeyHandler = compose(
      find(hasKeyHandlerFor(key)),
      Object.entries
    )

    const findKey = compose(
      head,
      defaultTo([]),
      findKeyHandler
    )

    const doAction = compose(
      f => f(findKey(keySet)),
      defaultTo(noop),
      when(isNotNil, toAction)
    )

    compose(
      doAction,
      findKeyHandler
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
  keySet: keySetProps.isRequired,
  onA: func.isRequired,
  onB: func.isRequired,
  onLeft: func.isRequired
}
