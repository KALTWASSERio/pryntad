import React, { forwardRef } from 'react'
import Tippy from '@tippy.js/react'
import styled from 'styled-components'
import { MdInfoOutline } from 'react-icons/md'

const StyledTooltip = styled.div`
  margin-left: 8px;
  color: #a0a09b;
`

export default function Tooltip(props) {
  const ThisWillWork = forwardRef((props, ref) => {
    return (
      <StyledTooltip ref={ref}>
        <MdInfoOutline />
      </StyledTooltip>
    )
  })
  return (
    <Tippy
      content={props.text}
      arrow={true}
      animation="scale"
      duration={0}
      delay={[300, 0]}
      theme="light"
    >
      <ThisWillWork />
    </Tippy>
  )
}
