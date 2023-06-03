import React, { useState } from 'react';
import Assig from './Assig';
import StudentForm from './AssigForm';
// import MyComponent from './ForM';
// import UserList from './Get';

const Display = () => {
  const [showGet, setShowGet] = useState(false);
  const [showPost, setShowPost] = useState(false);

  const handleGetClick = () => {
    setShowGet(true);
    setShowPost(false);
  };

  const handlePostClick = () => {
    setShowGet(false);
    setShowPost(true);
  };

  return (
    <div>
      <button onClick={handleGetClick}>Get Data</button>
      <button onClick={handlePostClick}>Post Data</button>

      {showGet && <Assig />}
      {showPost && <StudentForm />}
    </div>
  );
};

export default Display;



// import MyComponent from './ForM';
// import UserList from './Get';

// const Display = () => {
//   const [showGet, setShowGet] = useState(false);
//   const [showPost, setShowPost] = useState(false);

//   const handleGetClick = () => {
//     setShowGet(true);
//     setShowPost(false);
//   };

//   const handlePostClick = () => {
//     setShowGet(false);
//     setShowPost(true);
//   };

//   return (
//     <div>
//       <button onClick={handleGetClick}>Get Data</button>
//       <button onClick={handlePostClick}>Post Data</button>

//       {showGet && <UserList />}
//       {showPost && <MyComponent />}
//     </div>
//   );
// };

// export default Display;
