import React from 'react';
import './ContactForm.css'; // Import the CSS file for styling
import axios from "axios";
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');


  
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submited');
    const { name, email, message } = e.target.elements;
    let conForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conForm);
    axios.post('http://localhost:5000/contact', conForm)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };
 
  return (

    <div className='top-container'>
    <nav className="bg-dark navbar-dark navbar">
      <div className="py-3 col-12 d-flex justify-content-center text-white">
        <h3>Contact Us</h3>
      </div>
    </nav>

    <div className='one-container'>

    <div className='left'>

      <div className="container mt-5">
        {/* <h5 className="mb-3">We can't solve your problem if you don't tell us about it!</h5> */}

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>

   </div>
    <div className='right'>
    <div className='Contact'>
        <h4>GET IN TOUCH</h4>
      </div>
      {/* Contect Details */}
      <div className="contact-details">
        <div className="contact-item">
          <h5><img src="address.png" alt="Address" /> Our Address is here</h5>
        </div>
        <div className="contact-item">
          <h5><img src="phone.png" alt="Phone" />+12345678</h5>
        </div>
        <div className="contact-item">
          <h5><img src="email.png" alt="Email" />abc@gmail.com</h5>
          
        </div>
      </div>
      {/* Add social media icons */}
      <div className="social-icons">
        <hr className='line'/>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="twitter1.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="instagram.jpg" alt="Instagram" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="facebook.jpg" alt="Facebook" />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src="website.png" alt="Website" />
        </a>
      </div>


    </div>
    </div>
    </div>
    
  );
};

export default ContactForm;
