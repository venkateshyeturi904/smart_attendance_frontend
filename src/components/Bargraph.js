import React from 'react';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
 } from 'chart.js';
 import './barGraph.css'
import StudentTable from './StudentTable';
ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const BarGraph = ({ data }) => {

  const [dataType, setDataType] = useState('date');
  const dateData=data[0];
  const studentData=data[1];
  const dates = dateData.map(entry => entry.date);
  const studentCounts = dateData.map(entry => entry.studentCount);

  const studentId=studentData.map(entry=>entry.studentId);
  const studentAttended=studentData.map(entry=>entry.classesAttended);

  const chartData = {
    labels: dataType === 'date'?dates:studentId,
    datasets: [
      {
        label: 'Number of Students',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: dataType === 'date'?studentCounts:studentAttended,
      },
    ],
  };

  return (
    <div className='bar'>
        <Bar data={chartData} />
        <form className='radio_input'>
          <label>
            <input type="radio" name="dataType" value="date" checked={dataType === 'date'} className='radio_button' onChange={() => setDataType('date')} />
            Date
          </label>
          <label>
            <input type="radio" name="dataType" value="student" checked={dataType === 'student'} className='radio_button' onChange={() => setDataType('student')} />
            Student
          </label>
        </form>
    </div>
  );
};

export default BarGraph;
