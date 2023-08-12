import React from 'react'
import '../App.css'

function Home() {
  return (
    <div className='Home'>
        <div className='outer-container'>
        <div className='college'>
        <img
            className='Home-image'
            src="https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_logo.png"
        />
        <h1>
            INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI
        </h1>
        </div>
        <div className='button'>
            <button type="submit" class="Home_upload_button" >Upload Image</button>
        </div>
        </div>
    </div>
  )
}

export default Home
