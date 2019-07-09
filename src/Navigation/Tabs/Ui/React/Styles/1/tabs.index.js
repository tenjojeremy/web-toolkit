import React from 'react'
import TabsMui from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { Wrapper } from './tabs.styles'
import { defaultProps, propTypes } from './tabs.propTypes'

const Tabs = ({ data, color, style }) => {
  const historyRouter = window.historyRouter
  const tabWidth = 100 / data.length
  const currentUrl = window.location.pathname
  let currentTabIndex

  currentTabIndex = data.findIndex((tab) => tab.link === currentUrl)
  currentTabIndex === -1 && (currentTabIndex = 0)

  //Template
  return (
    <Wrapper style={{ ...style }} color={color}>
      <TabsMui
        value={currentTabIndex}
        indicatorColor={color}
        textColor={color}
        variant='fullWidth'
      >
        {data.map((item) => (
          <Tab
            style={{
              width: tabWidth,
              color: `var(--color-${color})`,
            }}
            key={item.label}
            label={item.label}
            onClick={() => historyRouter.push(item.link)}
          />
        ))}
      </TabsMui>
    </Wrapper>
  )
}

Tabs.defaultProps = defaultProps
Tabs.propTypes = propTypes

export default Tabs
