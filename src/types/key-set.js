import { shape, string } from 'prop-types'

export const keySetProps = shape({
  A: string.isRequired,
  B: string.isRequired,
  LEFT: string.isRequired
})
