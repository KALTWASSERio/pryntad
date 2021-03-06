import React from 'react'
import styled from 'styled-components'

const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  scroll-behavior: auto;
  padding: 14px 14px 0 14px;
`

const StyledConfirmation = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  border-radius: 8px;
  padding: 14px;
  box-shadow: 0 2px 4px #a0a09b;
  max-width: 800px;
  margin: 0 auto;
  align-content: center;
  background: white;
`
const StyledButton = styled.button`
  justify-self: center;
  align-self: center;
  padding: 12px;
`

export default function Confirmation(props) {
  return (
    <PageGrid>
      <StyledConfirmation>
        <h3>Deine Kampagne wurde erfolgreich erstellt!</h3>
        <p>
          Sie ist nun für alle Publisher des pryntad-Marktplatzes sichtbar, die
          deinem Zielgruppen- und Keyword-Targeting entsprechen.
        </p>
        <StyledButton onClick={() => props.history.push('/dashboard')}>
          Meine Kampagnen
        </StyledButton>
      </StyledConfirmation>
    </PageGrid>
  )
}
