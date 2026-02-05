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
    formData.append('excelFile', file); // 'excelFile' should match the field name in your Node.js backend

    console.log("FORMDATA", formData);

    try {
      const response = await fetch('https://polling-station-management-server.vercel.app/api/upload-excel', {
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
    <div >
        <div className="w-3/4 border border-amber-100 bg-blue-200 p-5 mx-auto my-5">
            <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
            <button className="btn btn-primary p-2 m-2"  onClick={handleUpload}>Upload and Import</button>
        </div>
      <br /> <br /> <br />
    </div>
  );
};

export default InsertFileData;