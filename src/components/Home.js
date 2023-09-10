import React from 'react'
import '../CSS/Home.css'
import { useNavigate } from 'react-router-dom/dist'

function Home() {
    const navigate=useNavigate();
    const handleClick=(e)=>{
        navigate('/image_upload');
    }
  
    return (
        <div className='Home'>
            <div className='out-container'>
                <div className='college'>
                    <img
                        className='Home-image'
                        alt=""
                        src="https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_logo.png"
                    />
                    <h1>
                        INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI
                    </h1>
                </div>
                <div className='content'>
                    <h2>Attendance Monitoring Portal</h2>
                    <p>
                        Welcome to the Attendance Monitoring Portal. This portal allows you to manage attendance for students in a classroom. Here's how to use the portal:
                    </p>
                    <ul>
                        <li>Upload a set of images of the students in a classroom.</li>
                        <li>You can preview the images uploaded under the preview box</li>
                        <li>Click on "Upload" to process the images.</li>
                        <li>You can view the students names in the images and the user has the chance to change the attendance status of a student by clicking on checkboxes.</li>
                        <li>Submit the attendance to save it on the backend server.</li>
                    </ul>
                    <h3>Analysis</h3>
                    <p>
                        In the "Analysis" tab, you can view detailed analytics for a student or a course. Enter any of the following 4 combinations of the given below inputs to view the analysis:
                    </p>
                    <ul>
                        <li>Course ID</li>
                        <li>Student ID</li>
                        <li>Date</li>
                    </ul>
                    <p>
                        To understand the usecase of all the 4 combinations hover over the "i" button beside the input box.
                    </p>
                </div>
                <div className='button'>
                        <button type="submit" className="Home_upload_button" onClick={handleClick}>Upload Image</button>
                </div>
            </div>
        </div>
    )
}

export default Home
