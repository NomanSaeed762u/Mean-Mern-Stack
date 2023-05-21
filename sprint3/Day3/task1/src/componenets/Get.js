import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/posts');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  console.log("The name and emails go here:", users);
  
  return (
    <div className='Get'>
      {users.map((user) => (
        <div key={user.id}>
          <h5>The Name is :{user.name}</h5>
          <h5>The Email is :{user.email}</h5>
        </div>
      ))}
    </div>
  );
};

export default UserList;
