import React from 'react'
import Footer from './Footer'
import Element from '../images/Element-1.svg'
import styled from 'styled-components'

const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  scroll-behavior: auto;
  padding: 14px 14px 0 14px;
  ::-webkit-scrollbar {
    display: none;
  }
  background: white;
  z-index: -1;
`

export default function() {
  const SVG = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="Element" fill="#000" />
    </svg>
  )
  return (
    <React.Fragment>
      <PageGrid>
        <div>{SVG}</div>
      </PageGrid>
      <Footer />
    </React.Fragment>
  )
}
