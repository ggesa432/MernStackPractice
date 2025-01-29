import React, { useState, useEffect } from 'react';
import './UserList.css'; 

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('http://localhost:5000/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  };

  return (
    <div className="user-list-container">
      <h2>Users and Their Hobbies</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user._id}>
              <strong>{user.username}</strong>
              {user.hobbies.length > 0 ? (
                <ul className="hobby-list">
                  {user.hobbies.map((hobby) => (
                    <li key={hobby._id}>{hobby.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No hobbies assigned</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
