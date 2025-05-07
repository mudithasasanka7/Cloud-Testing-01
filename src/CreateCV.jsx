import React, { useState } from 'react';

function CreateCV() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    skills: '',
    education: '',
    experience: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('cvData', JSON.stringify(formData));
    alert("CV Saved! Go to View CV page.");
  };

  return (
    <div className="form-container">
      <h2>Create Your CV</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <textarea name={field} value={formData[field]} onChange={handleChange} required />
          </div>
        ))}
        <button type="submit">Save CV</button>
      </form>
    </div>
  );
}

export default CreateCV;
