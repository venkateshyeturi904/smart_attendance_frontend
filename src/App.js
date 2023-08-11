import './App.css';
import { BrowserRouter as Router, Link, Route, Routes, Switch} from 'react-router-dom';
import ImageUploadComponent from './components/ImageUploadComponent';
import Header from './components/Header';
import Analysis from './components/Analysis';
import Home from './components/Home';
import StudentTable from './components/StudentTable';
function App() {
  const studentData = [
    {
      studentId: 1,
      studentName: 'John Doe',
      status: 'Present',
    },
    {
      studentId: 2,
      studentName: 'Jane Smith',
      status: 'Absent',
    },
    {
      studentId: 3,
      studentName: 'Michael Johnson',
      status: 'Present',
    },
    {
      studentId: 4,
      studentName: 'Emily Brown',
      status: 'Absent',
    },
    {
      studentId: 5,
      studentName: 'William Jones',
      status: 'Present',
    },
    {
      studentId: 6,
      studentName: 'Olivia Wilson',
      status: 'Present',
    },
    {
      studentId: 7,
      studentName: 'James Davis',
      status: 'Absent',
    },
    {
      studentId: 8,
      studentName: 'Sophia Martinez',
      status: 'Absent',
    },
    {
      studentId: 9,
      studentName: 'Benjamin Anderson',
      status: 'Present',
    },
    {
      studentId: 10,
      studentName: 'Ava Taylor',
      status: 'Present',
    },
    {
      studentId: 11,
      studentName: 'Ethan Wilson',
      status: 'Absent',
    },
    {
      studentId: 12,
      studentName: 'Isabella Harris',
      status: 'Present',
    },
    {
      studentId: 13,
      studentName: 'Alexander Martin',
      status: 'Absent',
    },
    {
      studentId: 14,
      studentName: 'Mia Lee',
      status: 'Absent',
    },
    {
      studentId: 15,
      studentName: 'Daniel Robinson',
      status: 'Present',
    },
    {
      studentId: 16,
      studentName: 'Charlotte Turner',
      status: 'Present',
    },
    {
      studentId: 17,
      studentName: 'Liam White',
      status: 'Absent',
    },
    {
      studentId: 18,
      studentName: 'Amelia Rodriguez',
      status: 'Absent',
    },
    {
      studentId: 19,
      studentName: 'Henry Scott',
      status: 'Present',
    },
    {
      studentId: 20,
      studentName: 'Ella Adams',
      status: 'Present',
    },
  ];
  
  return (
      <Router>
      <div className='app'>
      <Header/>
        <Routes>
          <Route path='/Attendance_analysis' element={(
            <div>
              <Analysis/>
            </div>
          )}/>
          <Route path='/students' element={(
            <div>
              <StudentTable row={studentData}/>
            </div>
          )}/>
          <Route path='/image_upload'element={(
            <div>
              <ImageUploadComponent />
            </div>
          )}/>
          <Route path='/' element={(
            <div>
              <Home/>
            </div>
          )}/>
        </Routes> 
        <footer className="footer">
          <span className='footer-text'>&copy; 2023 My App. All rights reserved.</span>
        </footer>
      </div>
      </Router>
  );
}

export default App;


