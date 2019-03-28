import React, { useState } from 'react'

export default function ReachEstimator(playlist) {
  /* const [reach, setReach] = useState([])
  const [circulation, setCirculation] = useState([])

  function reachCalc() {
    setReach(
    
    )
  }

  function circulationCalc() {
    setCirculation(
      
    )
  }

  reachCalc()
  circulationCalc() */

  return (
    <React.Fragement>
      <div>
        {playlist.playlist
          .map(item => item.reach)
          .reduce((prev, curr) => Number(prev) + Number(curr), 0)}
      </div>
      <div>
        {playlist.playlist
          .map(item => item.circulation)
          .reduce((prev, curr) => Number(prev) + Number(curr), 0)}
      </div>
    </React.Fragement>
  )
}
