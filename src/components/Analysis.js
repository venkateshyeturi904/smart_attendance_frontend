import React, { useState } from 'react';
import "../CSS/analysis.css";
import {
  courseId_by_date,
  courseId_by_student,
  student_by_course_by_date,
  student_by_course,
  student_by_course_average,
  course_by_date,
} from '../services/analysisService.js';
import BarGraph from './Bargraph';
import PieChart from './PieChart';
import DatesPresent from './DatesPresent';
import {FaInfoCircle} from 'react-icons/fa';

function Analysis() {
  const [classId, setClassId] = useState('');
  const [date, setDate] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [courseAttendance, setCourseAttendance] = useState([]);
  const [studentPresent, setStudentPresent] = useState('');
  const [studentAverage, setStudentAverage] = useState([]);
  const [datevsStatus, setDatevsStatus] = useState([]);
  const [coursevsDate, setCoursevsDate] = useState([]);
  const [courseAverage, setCourseAverage] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  

  const COLUMNS1 = [
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ];

  const COLUMNS2 = [
    {
      Header: 'Student Id',
      accessor: 'studentId',
    },
    {
      Header: 'Student Name',
      accessor: 'studentName',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ];

  const handleClassIdChange = (e) => {
    setClassId(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleStudentIdChange = (e) => {
    setRollNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStudentAverage([]);
    setCourseAttendance([]);
    setStudentPresent("");
    setCoursevsDate([]);

    if (classId !== '' && date === '' && rollNumber === '') {
      try {
        const response1 = await courseId_by_date(classId);
        const response2 = await courseId_by_student(classId);
        const Date_and_student = [response1.data, response2.data];
        setCourseAttendance(Date_and_student);
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (classId !== '' && date !== '' && rollNumber !== '') {
      try {
        const response = await student_by_course_by_date(classId, rollNumber, date);
        const value = (response.data[0]) ? 'present' : 'absent';
        setStudentPresent(value);
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (classId !== '' && date === '' && rollNumber !== '') {
      try {
        const response1 = await student_by_course(classId, rollNumber);
        const response2 = await student_by_course_average(classId, rollNumber);
        const present = response2.data;
        const absent = 100 - present;
        const date_attend = response1.data.map((element) => ({
          date: element[0],
          status: element[1] ? 'Present' : 'Absent',
        }));
        setStudentAverage([present, absent]);
        setDatevsStatus(date_attend);
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (classId !== '' && date !== '' && rollNumber === '') {
      try {
        const response1 = await course_by_date(classId, date);
        let present = 0;
        let absent = 0;
        const date_attend = response1.data.map((element) => {
          if (element[2]) present++;
          else absent++;
          return {
            studentId: element[0],
            studentName: element[1],
            status: element[2] ? 'Present' : 'Absent',
          };
        });
        const presentAverage = (present * 100) / (present + absent);
        const absentAverage = (absent * 100) / (present + absent);
        setCourseAverage([presentAverage, absentAverage]);
        setCoursevsDate(date_attend);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="sub-header">
      <div className="analysis-box">
        <h5>Course Id:</h5>
        <input
          type="text"
          placeholder="Course ID"
          value={classId}
          onChange={handleClassIdChange}
        />
        <h5>Date:</h5>
        <input type="date" value={date} onChange={handleDateChange} />
        <h5>Student ID:</h5>
        <input
          type="text"
          placeholder="Student ID"
          value={rollNumber}
          onChange={handleStudentIdChange}
        />
        <button type="submit" className="submit_button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="info-button">
        <button
          className="info-icon"
          onClick={() => setShowInfo(!showInfo)}
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          <FaInfoCircle />
        </button>
        {showInfo && (
          <div className="info-dropdown">
            <div className="info-box">
      <h3>Combinations:</h3>
      <ul>
        <li>
          Given Course ID observe:
          <ul className="sub-list">
            <li>Date vs Number of Students Attended </li>
            <li>Student vs number of classes attended</li>
          </ul>
        </li>
        <li>
          Given Course ID, Date, and Student ID, check whether the student was
          present or absent on the specified date for the course.
        </li>
        <li>
          Given Course ID and Student ID, view the average percentage of
          attendance for that student in the course with date-wise attendance.
        </li>
        <li>
          Given Course ID and Date, view the average attendance on that date
          and the attendance sheet for that particular course.
        </li>
      </ul>
    </div>
          </div>
        )}
      </div>
      </div>
      {courseAttendance.length > 0 && <BarGraph data={courseAttendance} />}
      {studentPresent !== '' && (
        <h1 className="studentPresent">{`Student is ${studentPresent}`}</h1>
      )}
      {studentAverage.length > 0 && (
        <div className="course_student">
          <PieChart
            attendancePercentage={studentAverage[0]}
            absencePercentage={studentAverage[1]}
          />
          <DatesPresent student_Data={datevsStatus} columns={COLUMNS1} />
        </div>
      )}
      {coursevsDate.length > 0 && (
        <div className="course_student">
          <PieChart
            attendancePercentage={courseAverage[0]}
            absencePercentage={courseAverage[1]}
          />
          <DatesPresent student_Data={coursevsDate} columns={COLUMNS2} />
        </div>
      )}
  </div>
  );
}

export default Analysis;