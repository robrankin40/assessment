import React from 'react';
import classnames from 'classnames'

export enum CalculatorButtonTypes {
  NUMBER,
  OPERATOR,
  SINGE_OPERATOR
}

export interface CalculatorButtonProps {
  label: string;
  onClick: () => void;
  type?: CalculatorButtonTypes
  flexWidth?: string;
}

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label, onClick, type = CalculatorButtonTypes.NUMBER, flexWidth = '1' }) => {
  const buttonClass = classnames('calc-btn', {
    'calc-num-btn': type === CalculatorButtonTypes.NUMBER,
    'calc-single-operator-btn': type === CalculatorButtonTypes.SINGE_OPERATOR,
    'calc-operator-btn': type === CalculatorButtonTypes.OPERATOR,
  }, { 'calc-btn-flex2': flexWidth === '2' });
  return (
    <div className={buttonClass} onClick={onClick} style={{ flex: flexWidth }}>
      {label}
    </div>
  )
}