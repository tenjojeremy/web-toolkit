import React, { useState, useEffect, Fragment } from 'react'
import B from '../Custom-Components/VariationBlock/variationBlock.index'
import { storiesOf } from '@storybook/react'

export const useStyles = ({ req, Variants, name, props }) => {
  const paths = req.keys()
  const [Elements, setElements] = useState(null)

  useEffect(() => {
    getElements()
  }, [])

  const getElements = async () => {
    const Elements = paths.map(async (location) => {
      const storyName = name.replace('/', '|')
      const cleanLocation = location.substring(2)
      const styleName = location.split('/')[1]
      const title = styleName
      let Comp = await import(`../../src/${name}/Ui/React/Styles/1/index`)
      Comp = Comp.default
      const El = () => (
        <Fragment key={title}>
          <B title={title} noBackground>
            <Variants Component={Comp} />
          </B>
        </Fragment>
      )

      storiesOf(storyName, module).add(styleName, El)

      return El()
    })

    const els = await Promise.all(Elements)
    const styles = <div style={{ display: 'grid', gridAutoFlow: 'column' }}>{els}</div>

    setElements(styles)
  }

  return { Elements }
}