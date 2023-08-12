import React from 'react'
import { useState } from 'react';
import './analysis.css';
import BarGraph from './Bargraph';
function Analysis() {
  const [classId, setClassId] = useState("");
  const [date, setDate] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [courseAttendance,setCourseAttendance]=useState([]);
  const courseData = [
    { date: '2023-08-01', studentCount: 20 },
    { date: '2023-08-02', studentCount: 25 },
    { date: '2023-08-03', studentCount: 18 },
    { date: '2023-08-04', studentCount: 22 },
    { date: '2023-08-05', studentCount: 30 },
    { date: '2023-08-06', studentCount: 15 },
    { date: '2023-08-07', studentCount: 28 },
    { date: '2023-08-08', studentCount: 23 },
    { date: '2023-08-09', studentCount: 19 },
    { date: '2023-08-10', studentCount: 24 },
    { date: '2023-08-01', studentCount: 20 },
    { date: '2023-08-02', studentCount: 25 },
    { date: '2023-08-03', studentCount: 18 },
    { date: '2023-08-04', studentCount: 22 },
    { date: '2023-08-05', studentCount: 30 },
    { date: '2023-08-06', studentCount: 15 },
    { date: '2023-08-07', studentCount: 28 },
    { date: '2023-08-08', studentCount: 23 },
    { date: '2023-08-09', studentCount: 19 },
    { date: '2023-08-10', studentCount: 24 },
  ];

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
      setCourseAttendance(courseData);
  }

  return (
      <div className="container" >
        <div className="analysis-box">
              <h5>Class Id :</h5>
              <input
                type="text"
                placeholder="Class ID"
                value={classId}
                onChange={handleClassIdChange}
              />
              <h5>Date :</h5>
              <input type="date" value={date} onChange={handleDateChange} />
              <h5>Student ID :</h5>
              <input type="text" placeholder="Student ID" value={rollNumber} onChange={handleStudentIdChange} />
              <button type="submit" class="submit_button" onClick={handleSubmit}>Submit</button>
        </div>
          {
            courseAttendance.length>0?(
            // <div className='box'>
              <BarGraph data={courseAttendance}/>
            // </div>
            ):<></>
          }
      </div>
  )
}

export default Analysis
