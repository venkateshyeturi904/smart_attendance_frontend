import React from 'react';
import '../App.css'
import StudentTable from './StudentTable';

const RollNumbersListComponent = ({ student_Data }) => {
  return (
    <div className='rollnumber_box'>
      <h1>Students in the Image</h1>
      <StudentTable row={student_Data}/>
    </div>
  );
};

export default RollNumbersListComponent;
