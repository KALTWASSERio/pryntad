import React, { useState } from 'react'

export default function ReachEstimator(playlist) {
  /*  const [reach, setReach] = useState([])
  const [circulation, setCirculation] = useState([])
 */

  /* console.log(
    playlist.playlist
      .map(item => item.reach)
      .reduce((prev, curr) => Number(prev) + Number(curr), 0)
  ) */
  /* function reachCalc() {
    setReach(
      playlist.playlist
        .map(item => item.reach)
        .reduce((prev, curr) => Number(prev) + Number(curr), 0)
    )
  } */

  /*   function circulationCalc() {
    setCirculation(
      playlist.playlist
        .map(item => item.circulation)
        .reduce((prev, curr) => Number(prev) + Number(curr), 0)
    )
  }
 */
  /*   reachCalc()
  circulationCalc() */

  return (
    <React.Fragment>
      <div>
        {playlist &&
          playlist.playlist
            .map(item => item.reach)
            .reduce((prev, curr) => Number(prev) + Number(curr), 0)}
      </div>
      <div>
        {playlist &&
          playlist.playlist
            .map(item => item.paid_circulation)
            .reduce((prev, curr) => Number(prev) + Number(curr), 0)}
      </div>
    </React.Fragment>
  )
}
