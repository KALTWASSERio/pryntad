import styled from 'styled-components'
export default styled.section`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin: 24px;
  overflow: scroll;
  /*   align-content: flex-start;*/
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
`
