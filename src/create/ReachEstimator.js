import React, { useState, useEffect } from 'react'

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

  var NumberFormat = require('react-number-format')

  return (
    <React.Fragment>
      <div>
        <p>
          Potenzielle Reichweite
          <NumberFormat
            value={reach}
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            prefix={' '}
            suffix={' '}
            style={{ fontWeight: 'bolder' }}
          />
          Personen. <br />
          Potenzielle Auflage
          <NumberFormat
            value={circulation}
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            prefix={' '}
            suffix={' '}
            style={{ fontWeight: 'bolder' }}
          />
          Exemplaren.
        </p>
      </div>
    </React.Fragment>
  )
}
