import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledEstimator = styled.div`
  height: 60px;
  background: #d70064;
  color: white;
  box-shadow: 1px -1px 1px -1px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0 auto;
`
const StyledValues = styled.p`
  margin: 0 0;
  padding: 4px 14px;
  display: block;
`

export default function ReachEstimator(playlist) {
  const [reach, setReach] = useState()
  const [circulation, setCirculation] = useState()

  useEffect(() => {
    reachCalc()
    circulationCalc()
  }, [playlist])

  function reachCalc() {
    setReach(
      playlist.playlist
        .map(item => item.reach)
        .reduce((prev, curr) => Number(prev) + Number(curr), 0)
    )
  }

  function circulationCalc() {
    setCirculation(
      playlist.playlist
        .map(item => item.paid_circulation)
        .reduce((prev, curr) => Number(prev) + Number(curr), 0)
    )
  }

  const NumberFormat = require('react-number-format')

  return (
    <React.Fragment>
      <React.Fragment>
        <StyledEstimator>
          <StyledValues>
            Potenzielle Reichweite:
            <NumberFormat
              value={reach}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix={' '}
              suffix={' '}
              style={{ fontWeight: 'bolder', color: 'white' }}
            />
            Leser <br />
            Potenzielle Auflage:
            <NumberFormat
              value={circulation}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix={' '}
              suffix={' '}
              style={{ fontWeight: 'bolder', color: 'white' }}
            />
            Exemplare
          </StyledValues>
        </StyledEstimator>
      </React.Fragment>
    </React.Fragment>
  )
}
