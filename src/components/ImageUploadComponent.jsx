import React, { useState } from "react";
import { uploadImage } from "../services/ImageUploadService";
import RollNumbersListComponent from "../components/RollNumbersListComponent";
import "../CSS/App.css";

const ImageUploadComponent=()=> {
  const [selectedFile, setSelectedFile] = useState(null);
  const [classId, setClassId] = useState("");
  const [date, setDate] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [studentData,setStudentData]=useState([]);
  const COLUMNS = [
    {
      Header: 'Student Name',
      accessor: 'studentName',
    },
    {
      Header: 'Student ID',
      accessor: 'studentID',
    },
    {
      Header: 'Present/Absent',
      accessor: 'attendance',
      Cell: ({ value }) => (value ? 'Present' : 'Absent'),
    },
  ];
  const data = [
    {
      studentName: 'John Doe',
      studentID: '12345',
      attendance: true, // Present
    },
    {
      studentName: 'Jane Smith',
      studentID: '67890',
      attendance: false, // Absent
    },
    {
      studentName: 'Michael Johnson',
      studentID: '54321',
      attendance: true, // Present
    },
    {
      studentName: 'Emily Brown',
      studentID: '98765',
      attendance: true, // Present
    },
    {
      studentName: 'William Lee',
      studentID: '13579',
      attendance: false, // Absent
    },
    {
      studentName: 'Olivia Davis',
      studentID: '24680',
      attendance: true, // Present
    },
    {
      studentName: 'James Wilson',
      studentID: '11111',
      attendance: false, // Absent
    },
    {
      studentName: 'Sophia Taylor',
      studentID: '22222',
      attendance: true, // Present
    },
    {
      studentName: 'Liam Anderson',
      studentID: '33333',
      attendance: true, // Present
    }
  ]
  
  

  const handleFileChange = (e) => {
    console.log("fileData", e.target.files);
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
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
    setStudentData(data);
    // if (!selectedFile) {
    //   alert("Please select an image to upload.");
    //   return;
    // }

    // if (!classId || !date) {
    //   alert("Please enter Class ID and Date.");
    //   return;
    // }

    // const formData = new FormData();
    // formData.append("image", selectedFile);
    // formData.append("classId", classId);
    // formData.append("date", date);

    // try {
    //   const response = await uploadImage(formData);
    //   setStudentData(response); 
    // } catch (error) {
    //   console.error("Error uploading image:", error);
    // }
  };

  return (
    <div>
      <div className="outer-container" >
        <div className='preview_box'>
        <div className="file-container">
            {previewImage ? (
              <img
                src={previewImage}
                alt=""
                className="image_preview_side"
              />
            ) : (
              <img
                src={
                  "https://img.freepik.com/free-vector/output_53876-25529.jpg"
                }
                alt=""
                className="image_preview_side"
              />
            )}
            <input
              id="imageInputA"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
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
            {previewImage ? (
              <img
                src={previewImage}
                alt=""
                className="image_preview"
              />
            ) : (
              <img
                src={
                  "https://img.freepik.com/free-vector/output_53876-25529.jpg"
                }
                alt=""
                className="image_preview"
              />
            )}
            <input
              id="imageInputA"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
              <button type="submit" class="upload_button">Upload</button>
          </form>
          </div>
          <div>
            {studentData.length > 0 ? (
               <RollNumbersListComponent student_Data={studentData} columns={COLUMNS} setData={setStudentData}/>
            ):<></>}
          </div>
      </div>
    </div>
  );
}

export default ImageUploadComponent;