import React from 'react'

import { CalculatorButton, CalculatorButtonTypes } from './CalculatorButton'

export const SingleOperatorRow: React.FC = () => {
  return (
    <div className="calc-single-operator-row">
      <CalculatorButton label="C" onClick={() => {}} type={CalculatorButtonTypes.SINGE_OPERATOR} />
      <CalculatorButton label="+/-" onClick={() => {}} type={CalculatorButtonTypes.SINGE_OPERATOR} />
      <CalculatorButton label="%" onClick={() => {}} type={CalculatorButtonTypes.SINGE_OPERATOR} />
    </div>
  )
}