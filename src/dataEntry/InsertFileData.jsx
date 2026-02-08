import React from 'react';
import { useState } from 'react';
// import axios from 'axios';

const InsertFileData = () => {
   const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    // formData.append('excelFile', file); // 'excelFile' should match the field name in your Node.js backend--> for local insert
    formData.append('file', file); // 'excelFile' should match the field name in your Node.js backend

    try {
      const response = await fetch('http://localhost:5000/api/upload-excel', {
        // const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result);
      alert('File uploaded and data imported successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error importing data.');
    }
  };

  return (
    <div>
      {/* <h2>Select an excel documents</h2> */}
      <div className="border border-b-blue-600 w-3/4 mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border border-b-emerald-900 p-2 m-2 rounded-md">
          <input type="file" name="file" accept=".xlsx, .xls" 
            className="w-45 md:w-60 border border-b-green-700 rounded-md mx-5 my-5 px-5 py-5"
            onChange={handleFileChange} />
        </div>
        <div className="border border-b-emerald-900 p-2 m-2 rounded-md">
          <button className="btn btn-primary rounded-md mx-5 my-5 px-5 py-5"  onClick={handleUpload}>
                Upload and Import
          </button>
        </div>
      </div>
    </div>

    


    </div>
  );
};

export default InsertFileData;