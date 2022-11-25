import React, { useState } from 'react';
import { ImUpload } from 'react-icons/im';
import './style.scss';

export default function App() {
  const [file, setFile] = useState(null);
  const handleUpload = (e) => {
    console.log('event', e.target.files[0]);
  };
  return (
    <div class="container">
      <input
        type="file"
        accept=".csv"
        id="csvFile"
        className="fileInput"
        onChange={(e) => handleUpload(e)}
      />
      <label for="csvFile">
        <div className="upload">
          <div className="uploadContent">
            <ImUpload className="uploadIcon" />
            <span className="btnTitle">Upload</span>
          </div>
        </div>
      </label>
    </div>
  );
}
