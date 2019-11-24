import { string, func, object } from 'prop-types'

export const defaultProps = {
  link: '/',
  text: 'Heathcare',
  icon: 'heart/gov',
  foregroundColor: 'primary',
  backgroundColor: 'primaryLighter',
  wrapperProps: {},
  onClick: () => null,
  router: { push: () => null },
}

export const propTypes = {
  link: string,
  text: string,
  icon: string,
  foregroundColor: string,
  backgroundColor: string,
  wrapperProps: object,
  onClick: func,
}
