import React from 'react';

const RollNumbersListComponent = ({ rollNumbers }) => {
  return (
    <div>
      <h2>Roll Numbers:</h2>
      <div className="roll-numbers-list">
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
