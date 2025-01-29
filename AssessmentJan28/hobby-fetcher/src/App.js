import React, { useState, useEffect } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import UserList from './components/UserList';

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [newHobby, setNewHobby] = useState('');
  const [currentPage, setCurrentPage] = useState('signup'); 

  useEffect(() => {
    fetchHobbies();
  }, []);

  const fetchHobbies = () => {
    fetch('http://localhost:5000/api/hobbies')
      .then((res) => res.json())
      .then((data) => setHobbies(data))
      .catch((err) => console.error('Error fetching hobbies:', err));
  };

  const handleAddHobby = () => {
    if (!newHobby.trim()) {
      alert("Please enter a hobby");
      return;
    }

    fetch('http://localhost:5000/api/hobbies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newHobby }),
    })
      .then((res) => res.json())
      .then(() => {
        setNewHobby('');
        fetchHobbies(); 
      })
      .catch((err) => console.error('Error adding hobby:', err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hobby Manager</h1>

        {/* Navigation Buttons */}
        <nav>
          <button onClick={() => setCurrentPage('signup')}>Sign Up</button>
          <button onClick={() => setCurrentPage('users')}>User List</button>
        </nav>

        {currentPage === 'signup' ? (
          <>
            {/* Hobby Input Field */}
            <div>
              <label>Add New Hobby: </label>
              <input
                type="text"
                value={newHobby}
                onChange={(e) => setNewHobby(e.target.value)}
                placeholder="Enter a hobby"
              />
              <button onClick={handleAddHobby}>Add Hobby</button>
            </div>

            {/* SignUp Component */}
            <SignUp hobbies={hobbies} />
          </>
        ) : (
          <UserList />
        )}
      </header>
    </div>
  );
}

export default App;

