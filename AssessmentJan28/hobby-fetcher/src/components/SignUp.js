import React, { useState, useEffect } from 'react';
import './SignUp.css';

const SignUp = ({ hobbies }) => {
  const [username, setUsername] = useState('');
  const [selectedHobby, setSelectedHobby] = useState('');
  const [userHobbies, setUserHobbies] = useState([]); // Store user's existing hobbies
  const [message, setMessage] = useState('');

  // Fetch user hobbies when the username changes
  useEffect(() => {
    if (username) {
      fetch(`http://localhost:5000/api/users/${username}`)
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data) setUserHobbies(data.hobbies.map(h => h._id));
        })
        .catch(err => console.error('Error fetching user hobbies:', err));
    }
  }, [username]);

  const handleSave = () => {
    if (!username || !selectedHobby) {
      alert('Please fill in all fields');
      return;
    }

    fetch(`http://localhost:5000/api/users/${username}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hobbies: [selectedHobby] }), // Save one hobby at a time
    })
      .then(res => res.json())
      .then(data => {
        setMessage(`User ${data.username} updated successfully!`);
        setUserHobbies(data.hobbies.map(h => h._id)); // Refresh user's hobbies
      })
      .catch(err => console.error(err));

    setSelectedHobby('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sign Up</h2>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label>Select Hobby: </label>
        <select
          value={selectedHobby}
          onChange={(e) => setSelectedHobby(e.target.value)}
        >
          <option value="">-- Select Hobby --</option>
          {hobbies.map((hobby) => (
            <option key={hobby._id} value={hobby._id} disabled={userHobbies.includes(hobby._id)}>
              {hobby.name} {userHobbies.includes(hobby._id) ? '(Already Added)' : ''}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSave}>Save Hobby</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;

