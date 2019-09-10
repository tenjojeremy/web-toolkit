import { string, number, func, object, bool } from 'prop-types'

export const defaultProps = {
  name: null,
  style: {},
  color: 'white',
  onClick: () => null,
  background: null,
  size: 45,
  label: null,
  font: 'primary',
  backgroundColor: 'primary',
  labelVariant: 'body2',
  labelColor: 'primary-darker',
  noBackground: null,
  dark: null,
  noBackgroundChange: null,
  outlined: null,
  link: null,
  inputProps: null,
  plain: null,
  router: window.historyRouter || {},
}

export const propTypes = {
  name: string.isRequired,
  style: object,
  color: string,
  font: string,
  backgroundColor: string,
  onClick: func,
  background: bool,
  noBackground: bool,
  size: number,
  label: string,
  dark: bool,
  noBackgroundChange: bool,
  plain: bool,
  outlined: bool,
  link: string,
  inputProps: object,
  router: object,
}
