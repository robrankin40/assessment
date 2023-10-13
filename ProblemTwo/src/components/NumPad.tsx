import React from 'react'

import { CalculatorButton } from './CalculatorButton'

export const NumPad: React.FC = () => {
  return (
    <div className='calc-num-pad'>
      <div className='calc-num-pad-row'>
        <CalculatorButton label="7" onClick={() => {}} />
        <CalculatorButton label="8" onClick={() => {}} />
        <CalculatorButton label="9" onClick={() => {}} />
      </div>

      <div className='calc-num-pad-row'>
        <CalculatorButton label="4" onClick={() => {}} />
        <CalculatorButton label="5" onClick={() => {}} />
        <CalculatorButton label="6" onClick={() => {}} />
      </div>

      <div className='calc-num-pad-row'>
        <CalculatorButton label="1" onClick={() => {}} />
        <CalculatorButton label="2" onClick={() => {}} />
        <CalculatorButton label="3" onClick={() => {}} />
      </div>

      <div className='calc-num-pad-row'>
        <CalculatorButton label="0" onClick={() => {}} flexWidth='2' />
        <CalculatorButton label="." onClick={() => {}} />
      </div>
    </div>
  )
}