import React from 'react'

import { OperatorColumn } from './OperatorColumn'
import { NumPad } from './NumPad'
import { SingleOperatorRow } from './SingleOperatorRow'

export const ButtonPad: React.FC = () => {
  return (
    <div className="calc-button-pad">
      <div className="calc-button-pad-left-panel">
        <SingleOperatorRow />
        <NumPad />
      </div>
      <OperatorColumn />
    </div>
  )
}