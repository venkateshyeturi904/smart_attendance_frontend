import React from 'react'
import { useState } from 'react';
function Analysis() {
  const [classId, setClassId] = useState("");
  const [date, setDate] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const handleClassIdChange = (e) => {
    console.log("value", e);
    setClassId(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleStudentIdChange=(e)=>{
    setRollNumber(e.target.value);
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
  }

  return (
    <div className='analysis'>
      <div className="outer-container" >
        <div className="box">
          <form onSubmit={handleSubmit}>
              <h5>Enter Your Class Id</h5>
              <input
                type="text"
                placeholder="Class ID"
                value={classId}
                onChange={handleClassIdChange}
              />
              <h5>Enter Date</h5>
              <input type="date" value={date} onChange={handleDateChange} />
              <h5>Enter Student ID</h5>
              <input type="text" placeholder="Student ID" value={rollNumber} onChange={handleStudentIdChange} />
              <button type="submit" class="upload_button">Submit</button>
          </form>
        </div>
        {/* {rollNumbers.length > 0 && (
          <RollNumbersListComponent rollNumbers={rollNumbers} />
        )} */}
      </div>
    </div>
  )
}

export default Analysis
