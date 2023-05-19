import React from 'react';
import './SpeedLevel.css';

const SpeedLevel = () => {
  return (
    <div className='card'>
        <div className='picture'></div>
        <div className='right-col'>
            <div>
                <h1>Sptrint<span>speed task</span></h1>
                <p>Trains the skill of fast translation. 
                You have to choose if the translation corresponds to the suggested word.
                </p>
            </div>
            <div>
                <h3>Choose a level : </h3>
                <ul className='level'>
                    <li className='A1'>A1</li>
                    <li className='A2'>A2</li>
                    <li className='B1'>B1</li>
                    <li className='B2'>B2</li>
                    <li className='C1'>C1</li>
                    <li className='C2'>C2</li>
                </ul>
                <a href='#'>Get Started</a>
                
            </div>
            
        </div>

    </div>
  )
}

export default SpeedLevel;