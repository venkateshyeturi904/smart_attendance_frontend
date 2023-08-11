import React, { useState } from "react";
import { uploadImage } from "../services/ImageUploadService";
import RollNumbersListComponent from "../components/RollNumbersListComponent";
import "../App.css";
import Header from "./Header";

export default function ImageUploadComponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [classId, setClassId] = useState("");
  const [date, setDate] = useState("");
  const [rollNumbers, setRollNumbers] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

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

    if (!selectedFile) {
      alert("Please select an image to upload.");
      return;
    }

    if (!classId || !date) {
      alert("Please enter Class ID and Date.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("classId", classId);
    formData.append("date", date);

    console.log(formData);
    try {
      const response = await uploadImage(formData);
      setRollNumbers(response); // Assuming the response data is an array of roll numbers
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <Header/>
      <div className="outer-container" >
        <div className="box">
          <img
            className="IITG_logo"
            src="https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_logo.png"
          />
          <form onSubmit={handleSubmit}>
              <h5>Enter Your Class Id</h5>
              <input
                type="text"
                placeholder="Class ID"
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
                alt="Image Preview"
                className="image_preview"
              />
            ) : (
              <img
                src={
                  "https://img.freepik.com/free-vector/output_53876-25529.jpg"
                }
                alt="Image Preview"
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
            {rollNumbers.length > 0 ? (
            <RollNumbersListComponent rollNumbers={rollNumbers} />
            ):<></>}
          </div>
      </div>
    </div>
  );
}

/*
render component code : 
<form onSubmit={handleSubmit}>
    <div className="outer-container">
      <div className="image-container">
        <h1>Image Upload</h1>
        <div className>
          <input type="file" onChange={handleFileChange} />
          <input type="text" placeholder="Class ID" value={classId} onChange={handleClassIdChange} />
        </div>
      </div>
      {rollNumbers.length > 0 && <RollNumbersListComponent rollNumbers={rollNumbers} />}
    </div>
    <input type="date" value={date} onChange={handleDateChange} />
    <button type="submit">Upload</button>
    </form>
*/
