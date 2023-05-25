
import React, { useState } from 'react';
import './Forms.css';

const Forms = ({ addAuthor }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formHandle = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.city) {
      alert('Please fill out this form!!!');
      return;
    }

    const newData = { ...formData };
    addAuthor(newData);

    setFormData({
      name: '',
      age: '',
      city: '',
    });
  };

  return (
    <div className="input-container">
      <h2>Add Author</h2>
      <form onSubmit={formHandle}>
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label>Age</label>
        <input
          type="text"
          value={formData.age}
          name="age"
          onChange={handleChange}
        />
        <br />
        <label>City</label>
        <input
          type="text"
          value={formData.city}
          name="city"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
