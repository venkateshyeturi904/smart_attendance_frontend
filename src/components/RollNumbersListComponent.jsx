import React from 'react';
import '../App.css'

const RollNumbersListComponent = ({ rollNumbers }) => {
  return (
    <div className='rollnumber_box'>
      <h2>Roll Numbers:</h2>
      <div className="grid">
        {rollNumbers.map((rollNumber, index) => (
          <div key={index} className="roll-number-box">
            {rollNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollNumbersListComponent;
