import React from 'react'

type Props = {}

function StatusBar({}: Props) {
  return (
    <div className="progress-counter">
        <div className="progress-pin pin-move60">60%</div>
        <div className="count-bar60 counter-inner"> </div>
    </div>
  )
}

export default StatusBar