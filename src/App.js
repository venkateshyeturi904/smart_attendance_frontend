import './CSS/App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ImageUploadComponent from './components/ImageUploadComponent';
import Header from './components/Header';
import Analysis from './components/Analysis';
import Home from './components/Home';
function App() {
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


