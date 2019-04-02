import React, { forwardRef } from 'react'
import Tippy from '@tippy.js/react'
import styled from 'styled-components'
import { MdInfoOutline } from 'react-icons/md'

const StyledTooltipp = styled.div`
  margin-left: 8px;
  color: #a0a09b;
`

export default function Tooltipp(props) {
  const ThisWillWork = forwardRef((props, ref) => {
    return (
      <StyledTooltipp ref={ref}>
        <MdInfoOutline />
      </StyledTooltipp>
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
