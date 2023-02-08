import React from 'react'

type Props = {}

function Counter({}: Props) {
  return (
    <div className="step-counter">
        <div className="step-counter-inner">
            <div className="step-number active">
                1
            </div>
            <div className="step-number">
                2
            </div>
            <div className="step-number">
                3
            </div>
            <div className="step-number no-line">
                4
            </div>
        </div>
    </div>
  )
}

export default Counter