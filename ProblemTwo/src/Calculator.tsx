import React from 'react';
import './App.css';
import { ButtonPad } from './components/ButtonPad';

export const Calculator: React.FC = () => {
  return (
    <div className="App">
      <div className="cal-bg">
        <ButtonPad />
      </div>
    </div>
  );
}
