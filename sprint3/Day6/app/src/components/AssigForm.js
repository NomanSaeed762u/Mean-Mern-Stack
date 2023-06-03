import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
const {firt_name,last_name,email} =formData
    axios.post('/api?firt_name=first_name&last_name=last_name&email=email', formData)
      .then(response => {
        console.log('Server response:', response.data);
        // Handle the response from the server as needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors from the server as needed
      });

    // Reset the form
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
  };

  return (
    <div>
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={firt_name} onChange={handleChange} required /><br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={last_name} onChange={handleChange} required /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChange} required /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StudentForm;
