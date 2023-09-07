import React from 'react';
import '../CSS/App.css'
import StudentTable from './StudentTable';

const RollNumbersListComponent = ({ student_Data,columns,setData,handleSubmit,flag }) => {
  return (
    <div className='rollnumber_box'>
      <h1>Students in the Image</h1>
      {
        student_Data.length>0?(
        <><StudentTable row={student_Data} col={columns} setData={setData} /><button type="submit" onClick={handleSubmit} class="submit">{(flag)?"Submitted":"Submit"}</button></>
        ):<></>
      }
    </div>
  );
};

export default RollNumbersListComponent;