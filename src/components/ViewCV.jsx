import React, { useEffect, useState } from 'react';

function ViewCV() {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('cvData');
    if (stored) {
      setCvData(JSON.parse(stored));
    }
  }, []);

  if (!cvData) {
    return <p>No CV data found. Please create your CV first.</p>;
  }

  return (
    <div className="cv-display">
      <h1>{cvData.name}</h1>
      <p><strong>Email:</strong> {cvData.email}</p>
      <p><strong>Phone:</strong> {cvData.phone}</p>
      <div className="section">
        <h2>Professional Summary</h2>
        <p>{cvData.summary}</p>
      </div>
      <div className="section">
        <h2>Skills</h2>
        <p>{cvData.skills}</p>
      </div>
      <div className="section">
        <h2>Education</h2>
        <p>{cvData.education}</p>
      </div>
      <div className="section">
        <h2>Work Experience</h2>
        <p>{cvData.experience}</p>
      </div>
    </div>
  );
}

export default ViewCV;
