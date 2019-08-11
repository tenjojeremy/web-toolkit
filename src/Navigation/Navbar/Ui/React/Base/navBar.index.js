import React, { memo } from 'react'

import List from '../../../../../Data-Display/List/Ui/React/list.index'
import Icon from '../../../../../Data-Display/Icon/Ui/React/Base/icon.index'
import Avatar from '../../../../../Data-Display/Avatars/avatar.index'

import { defaultProps, propTypes } from './navBar.propTypes'
import { Wrapper } from './navBar.styles'

const NavBar = ({
  data,
  backgroundColor,
  color,
  onInput,
  router,
  position,
  shadow,
}) => {
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      position={position}
      shadow={shadow}
    >
      <List
        style={{
          alignItems: 'center',
          justifyItems: 'center',
          gridAutoColumns: '1fr',
        }}
      >
        {data.map(
          (
            {
              file = null,
              src = null,
              icon,
              label,
              link,
              iconColor,
              iconBackgroundColor,
              iconSize,
              iconPlain = true,
              top,
              url,
            },
            index,
          ) => {
            console.log(location, link)
            const { location } = router
            const isActive = location === link
            const inputProps = file ? { onInput } : null
            const key = label || link || icon || index
            const isPlain = iconPlain
            const iconPosition = top ? { transform: 'translateY(-30px)' } : null

            const handleClick = () => url && router.push(url)

            return (
              <div key={key} style={iconPosition} onClick={handleClick}>
                {icon && (
                  <Icon
                    name={icon}
                    label={label}
                    color={iconColor ? iconColor : isActive ? color : 'grey'}
                    link={link}
                    size={iconSize}
                    background={iconBackgroundColor}
                    backgroundColor={iconBackgroundColor}
                    inputProps={inputProps}
                    plain={isPlain}
                  />
                )}

                {src && (
                  <Avatar
                    src={src}
                    radius={100}
                    borderColor={isActive ? color : null}
                    inputProps={inputProps}
                    size={40}
                  />
                )}
              </div>
            )
          },
        )}
      </List>
    </Wrapper>
  )
}

NavBar.defaultProps = defaultProps
NavBar.propTypes = propTypes

export default memo(NavBar)
