import React, { useState } from "react";
import { uploadImage ,uploadAttended} from "../services/ImageUploadService";
import RollNumbersListComponent from "../components/RollNumbersListComponent";
import "../CSS/App.css";

const ImageUploadComponent=()=> {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [classId, setClassId] = useState("");
  const [date, setDate] = useState("");
  const [previewImages, setPreviewImages] = useState([]);
  const [studentData,setStudentData]=useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page
  const imagesPerPage = 1; // Number of images to display per page
  const [flagSubmit,setFlagSubmit]=useState(false);
  const [flagUpload,setFlagUplaod]=useState(false);
  const COLUMNS = [
    {
      Header: 'Student Name',
      accessor: 'student_name',
    },
    {
      Header: 'Student ID',
      accessor: 'student_id',
    },
    {
      Header: 'Present/Absent',
      accessor: 'attendance',
      Cell: ({ value }) => (value ? 'Present' : 'Absent'),
    },
  ];

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setCurrentPage(0);

    const previews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = (e) => resolve(e.target.result);
      });
    });

    Promise.all(previews).then((images) => {
      setPreviewImages(images);
    });
  };

  const handleClassIdChange = (e) => {
    console.log("value", e);
    setClassId(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setStudentData(data);
    if (!selectedFiles) {
      alert("Please select an image to upload.");
      return;
    }

    if (!classId || !date) {
      alert("Please enter Class ID and Date.");
      return;
    }
    setFlagUplaod(true);
    try {
      let studentsname_rollnumbers=[];
      let rollnumbers=[]
      for(let i=0;i<selectedFiles.length;i++){
        const formData = new FormData();
        formData.append("images", selectedFiles[i]);
        formData.append("classId", classId);
        formData.append("date", date);
        const response = await uploadImage(formData);
        studentsname_rollnumbers=studentsname_rollnumbers.concat(response[0]);
        rollnumbers=rollnumbers.concat(response[1]);
      }
      rollnumbers=[...new Set(rollnumbers)];
      const uniqueArray = [];
      const seen = new Set();
      for (const obj of studentsname_rollnumbers) {
      if (!seen.has(obj.student_id)) {
        seen.add(obj.student_id);
        uniqueArray.push(obj);
      }
      }
      studentsname_rollnumbers=uniqueArray;
      console.log(studentsname_rollnumbers);
      const attendanceList = studentsname_rollnumbers.map(student => ({
        student_name: student.student_name,
        student_id: student.student_id,
        attendance: rollnumbers.includes(student.student_id)
      }));
      console.log(rollnumbers)
      console.log(attendanceList);
      setFlagSubmit(false);
      setStudentData(attendanceList); 
      setFlagUplaod(false);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(previewImages.length / imagesPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleSubmitAttendance=async()=>{
    let attended=[];
    studentData.forEach((obj)=>{
        if(obj.attendance){
          attended.push(obj.student_id);
        }
    })
    console.log(attended)
    try{
      const formData = {
         rollNos : attended,
        classId : classId,
        date : date
      }
      const response = await uploadAttended(formData);
      setFlagSubmit(response);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
    
  }

  return (
    <div>
      <div className="outer-container" >
        <div className='preview_box'>
        <div className="file-container">
        {
              <h2>
                Preview
              </h2>
            }
        {previewImages.length > 0 ? (
              previewImages.slice(
                currentPage * imagesPerPage,
                (currentPage + 1) * imagesPerPage
              ).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index}`}
                  className="image_preview_side"
                />
              ))
            ) : (
              <img
                src={"https://img.freepik.com/free-vector/output_53876-25529.jpg"}
                alt=""
                className="image_preview_side"
              />
            )}
            {
              previewImages.length>0?(
                <div className="pagination-buttons">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 0}
                >
                  Previous
                </button>
                <span>
                  {' '}
                  {Math.min((currentPage + 1), previewImages.length)}/{' '}
                  {previewImages.length}
                  {' '}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(previewImages.length / imagesPerPage) - 1
                  }
                >
                  Next
                </button>
              </div>
              ):<></>
            }
            {/* <input
              id="imageInputA"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              multiple
            /> */}
          </div>
        </div>
        <div className="box">
          <img
            className="IITG_logo"
            alt=""
            src="https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_logo.png"
          />
          <form onSubmit={handleSubmit}>
              <h5>Enter Your Course Id</h5>
              <input
                type="text"
                placeholder="Course ID"
                value={classId}
                onChange={handleClassIdChange}
              />
              <h5>Enter Date</h5>
              <input type="date" value={date} onChange={handleDateChange} />
          <div className="image-title-container">
            <h5 style={{ textAlign: "center" }}>Image Upload</h5>
          </div>
          <div className="file-container">
          {/* {previewImages.length > 0 ? (
              previewImages.slice(
                currentPage * imagesPerPage,
                (currentPage + 1) * imagesPerPage
              ).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index}`}
                  className="image_preview"
                />
              ))
            ) : (
              <img
                src={"https://img.freepik.com/free-vector/output_53876-25529.jpg"}
                alt=""
                className="image_preview"
              />
            )}
            {
              previewImages.length>0?(
                <div className="pagination-buttons">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(previewImages.length / imagesPerPage) - 1
                  }
                >
                  Next
                </button>
              </div>
              ):<></>
            } */}
            <input
              id="imageInputA"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              multiple
            />
          </div>
              <button type="submit" class="upload_button">{(flagUpload)?"Processing":"Upload"}</button>
          </form>
          </div>
          <div>
            <RollNumbersListComponent student_Data={studentData} handleSubmit={handleSubmitAttendance} columns={COLUMNS} flag={flagSubmit} setData={setStudentData}/>
          </div>
      </div>
    </div>
  );
}

export default ImageUploadComponent;