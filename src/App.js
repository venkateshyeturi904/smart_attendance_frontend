import './App.css';
import { BrowserRouter as Router, Link, Route, Routes, Switch} from 'react-router-dom';
import ImageUploadComponent from './components/ImageUploadComponent';
import Header from './components/Header';
import Analysis from './components/Analysis';
function App() {
  return (
      // <Router>
      //   <Switch>
      //     <Route exact path="/">
      //       <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      //       <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      //         <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
      //           <li style={{ margin: '0 10px' }}>Home</li>
      //           <li style={{ margin: '0 10px' }}> <Link to="/attendance">Attendance</Link></li>
      //           <li style={{ margin: '0 10px' }}>About</li>
      //         </ul>
      //       </nav>
      //       <main style={{ flex: 1 }}>
      //         <h1>Hello</h1>
      //         <p>bye</p>
      //       </main>
      //       <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center'  }}>
      //         <p>&copy; 2023 My App. All rights reserved.</p>
      //       </footer>
      //     </div>
      //     </Route>
      //     <Route path="/attendance">
      //       <ImageUploadComponent />
      //     </Route>
      //   </Switch>
      // </Router>
      <Router>
      <div className='app'>
        <Routes>
          <Route path='/Attendance_analysis' element={(
            <div>
              <Header/>
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
              <Header/>
            </div>
          )}/>
        </Routes> 
      </div>
      </Router>
  );
}

export default App;


