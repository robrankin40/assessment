import React from 'react'

import { CalculatorButton, CalculatorButtonTypes } from './CalculatorButton';

export const OperatorColumn: React.FC = () => {
  return (
    <div className="calc-operator-column">
      <CalculatorButton label="/" onClick={() => {}} type={CalculatorButtonTypes.OPERATOR} />
      <CalculatorButton label="*" onClick={() => {}} type={CalculatorButtonTypes.OPERATOR} />
      <CalculatorButton label="-" onClick={() => {}} type={CalculatorButtonTypes.OPERATOR} />
      <CalculatorButton label="+" onClick={() => {}} type={CalculatorButtonTypes.OPERATOR} />
      <CalculatorButton label="=" onClick={() => {}} type={CalculatorButtonTypes.OPERATOR} />
    </div>
  )
}