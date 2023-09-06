import React, { useState } from "react";
import { uploadImage } from "../services/ImageUploadService";
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
  // const data = [
  //   {
  //     studentName: 'John Doe',
  //     studentID: '12345',
  //     attendance: true, // Present
  //   },
  //   {
  //     studentName: 'Jane Smith',
  //     studentID: '67890',
  //     attendance: false, // Absent
  //   },
  //   {
  //     studentName: 'Michael Johnson',
  //     studentID: '54321',
  //     attendance: true, // Present
  //   },
  //   {
  //     studentName: 'Emily Brown',
  //     studentID: '98765',
  //     attendance: true, // Present
  //   },
  //   {
  //     studentName: 'William Lee',
  //     studentID: '13579',
  //     attendance: false, // Absent
  //   },
  //   {
  //     studentName: 'Olivia Davis',
  //     studentID: '24680',
  //     attendance: true, // Present
  //   },
  //   {
  //     studentName: 'James Wilson',
  //     studentID: '11111',
  //     attendance: false, // Absent
  //   },
  //   {
  //     studentName: 'Sophia Taylor',
  //     studentID: '22222',
  //     attendance: true, // Present
  //   },
  //   {
  //     studentName: 'Liam Anderson',
  //     studentID: '33333',
  //     attendance: true, // Present
  //   }
  // ]
  
  

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

    const formData = new FormData();
    formData.append("image", selectedFiles);
    formData.append("classId", classId);
    formData.append("date", date);

    try {
      const response = await uploadImage(formData);
      console.log(response);
      setStudentData(response); 
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


  return (
    <div>
      <div className="outer-container" >
        <div className='preview_box'>
        <div className="file-container">
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
            <input
              id="imageInputA"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              multiple
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
          {previewImages.length > 0 ? (
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
            }
            <input
              id="imageInputA"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              multiple
            />
          </div>
              <button type="submit" class="upload_button">Upload</button>
          </form>
          </div>
          <div>
            <RollNumbersListComponent student_Data={studentData} columns={COLUMNS} setData={setStudentData}/>
          </div>
      </div>
    </div>
  );
}

export default ImageUploadComponent;