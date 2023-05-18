// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';


// export default function ForM (){
//     return (
//         <div>
//             < Formik initialValues={{email:'', password:''}}
//             onSubmit={(values)=> console.log(values)}
//          >
//          {({values, handleChange})=>(
//             <Form>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                 id='email'
//                 name='email'
//                 type='email'
//                 onChange={handleChange}
//                 value={values.email}
//                 />
//                 <button type='submit'>Submit</button>
//                 </Form>
//          )}
//          </Formik>
//         </div>
//     )
// }

import React from 'react';

const MyComponent = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUser = {
      name: formData.get('name'),
      email: formData.get('email')
    };

    fetch('http://localhost:3001/employees ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data added:', data);
        // Perform any additional actions after data is added
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
      });
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyComponent;

