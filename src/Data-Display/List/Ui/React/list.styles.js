import styled from 'styled-components'

export const Wrapper = styled.div`
  /* Shared */
  transition: 0.2s;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  display: grid;
  margin: ${({ padding, noPaddingTB, noPaddingSides }) =>
    noPaddingTB
      ? `0 var(--spacing-${padding})`
      : noPaddingSides
      ? `var(--spacing-${padding}) 0`
      : `var(--spacing-${padding})`};
  grid-gap: ${({ gap }) => `var(--spacing-${gap})`};
  grid-auto-flow: ${({ direction }) => direction};

  /* Overflows */
  ${({ overflows, dataLength }) =>
    overflows &&
    `
    overflow: auto;
    overflow-y: hidden;
    grid-template-columns: repeat(${dataLength > 0 && dataLength}, auto);
    grid-template-rows: 100%;
    justify-content: flex-start;
  `}

    /* Grid */
    ${({ grid, repeat, minWidth, repeatOnMinWidth }) =>
      grid &&
      `
      grid-auto-flow: row;
      align-items: stretch;
      grid-template-columns: repeat(${repeat}, minmax(10px, 1fr));

  /* Min Width */
  @media (min-width: ${minWidth}px) {
    grid-template-columns: repeat(${repeatOnMinWidth}, minmax(10px, 1fr));
  }   
    `} 

    /* Grid of photos */
    ${({ photoGrid, repeat, minWidth, repeatOnMinWidth }) =>
      photoGrid &&
      `
      grid-auto-flow: row;
      align-items: stretch;
      grid-template-columns: repeat(${repeat}, minmax(10px, 1fr));
      
      /* Min Width */
  @media (min-width: ${minWidth}px) {
    grid-template-columns: repeat(${repeatOnMinWidth}, minmax(10px, 1fr));
  }   
  > div {
    padding-top: 100%;
    width: auto;
  }
    `} 


`
