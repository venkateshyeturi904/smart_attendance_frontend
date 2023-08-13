import React from 'react'
import { useState } from 'react';
import './analysis.css';
import BarGraph from './Bargraph';
import PieChart from './PieChart';
function Analysis() {
  const [classId, setClassId] = useState("");
  const [date, setDate] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [courseAttendance,setCourseAttendance]=useState([]);
  const [studentPresent,setStudentPresent]=useState("");
  const [studentAverage,setStudentAverage]=useState([]);
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

  const studentAttendanceData = [
    { studentId: 1, classesAttended: 15 },
    { studentId: 2, classesAttended: 18 },
    { studentId: 3, classesAttended: 12 },
    { studentId: 4, classesAttended: 20 },
    { studentId: 5, classesAttended: 17 },
    { studentId: 6, classesAttended: 14 },
    { studentId: 7, classesAttended: 19 },
    { studentId: 8, classesAttended: 16 },
    { studentId: 9, classesAttended: 13 },
    { studentId: 10, classesAttended: 11 },
    { studentId: 11, classesAttended: 22 },
    { studentId: 12, classesAttended: 21 },
    { studentId: 13, classesAttended: 8 },
    { studentId: 14, classesAttended: 9 },
    { studentId: 15, classesAttended: 23 },
    { studentId: 16, classesAttended: 26 },
    { studentId: 17, classesAttended: 7 },
    { studentId: 18, classesAttended: 25 },
    { studentId: 19, classesAttended: 10 },
    { studentId: 20, classesAttended: 24 },
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
      if(classId!="" && date=="" && rollNumber==""){
        const Date_and_student=[courseData,studentAttendanceData];
        setCourseAttendance(Date_and_student);
        setStudentAverage("");
        setStudentAverage([]);
      }else if(classId!="" && date!="" && rollNumber!=""){
        setCourseAttendance([]);
        setStudentPresent("present");
        setStudentAverage([]);
      }else if(classId!="" && date=="" && rollNumber!=""){
        setCourseAttendance([]);
        setStudentAverage([80,20]);
        setStudentPresent("");
      }
      
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
              <BarGraph data={courseAttendance}/>
            ):<></>
          }
          {
            studentPresent!=""?(
              <h1 className='studentPresent'>{`Student is ${studentPresent}`}</h1>
            ):<></>
          }
          {
            studentAverage.length>0?(
              <PieChart attendancePercentage={studentAverage[0]} absencePercentage={studentAverage[1]}/>
            ):<></>
          }
      </div>
  )
}

export default Analysis
