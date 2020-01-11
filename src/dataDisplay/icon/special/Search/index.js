import React, { useState, memo, useEffect } from 'react'

import Form from '../../../../input/form/form.index'
import Box from '../../../box/index'
import Textfield from '../../../../input/form/textField/styles/1/index'
import Icon from '../../'
import Animation from '../../../../miscUtils/animations/Web-Animations-API'

import { defaultProps, propTypes } from './search.propTypes'
import { Wrapper, WrapperInput } from './search.styles'

const IconSearch = ({
  mainIcon,
  closeIcon,
  backgroundColor,
  onSubmit,
  boxShadow,
  inputName,
  styles,
}) => {
  const [show, setShow] = useState(null)
  const toggleShow = () => setShow(!show)

  useEffect(() => {
    const inputEl = document.querySelector(`input[id=${inputName}]`)
    if (show) inputEl.focus()
    if (!show) inputEl.blur()
  }, [show])

  return (
    <>
      <Box styles={Wrapper}>
        <Box styles={WrapperInput}>
          <Animation show={show}>
            <Form onSubmitSuccess={onSubmit}>
              <Textfield name={inputName} placeholder='Search...' />
            </Form>
          </Animation>
        </Box>

        <Icon
          style={styles}
          onClick={toggleShow}
          name={show ? closeIcon : mainIcon}
          backgroundColor={backgroundColor}
          background
          noBackgroundChange
          size={50}
          boxShadow={boxShadow}
        />
      </Box>
    </>
  )
}

IconSearch.defaultProps = defaultProps
IconSearch.propTypes = propTypes

export default memo(IconSearch)