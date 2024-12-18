import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [specials, setSpecials] = useState([]);
  const [newSpecial, setNewSpecial] = useState({ title: '', description: '', image: null });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSpecials = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://api.example.com/daily-specials', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setSpecials(data);
        } else {
          setError('Failed to fetch specials.');
        }
      } catch (error) {
        console.error('Error fetching specials:', error);
      }
    };

    fetchSpecials();
  }, []);

  const handleAddSpecial = async () => {
    try {
      const formData = new FormData();
      formData.append('title', newSpecial.title);
      formData.append('description', newSpecial.description);
      if (newSpecial.image) {
        formData.append('image', newSpecial.image);
      }

      const token = localStorage.getItem('token');
      const response = await fetch('https://api.example.com/daily-specials', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setSpecials([...specials, data]);
        setNewSpecial({ title: '', description: '', image: null });
      } else {
        setError('Failed to add special.');
      }
    } catch (error) {
      console.error('Error adding special:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/admin';
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <button onClick={handleLogout}>Log Out</button>

      <h2>Current Specials</h2>
      <div className="specials-list">
        {specials.length > 0 ? (
          specials.map((special, index) => (
            <div key={index} className="special">
              <h3>{special.title}</h3>
              <p>{special.description}</p>
              {special.image && <img src={special.image} alt={special.title} />}
            </div>
          ))
        ) : (
          <p>No specials available.</p>
        )}
      </div>

      <h2>Add a New Special</h2>
      <div className="new-special-form">
        <input
          type="text"
          placeholder="Title"
          value={newSpecial.title}
          onChange={(e) => setNewSpecial({ ...newSpecial, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newSpecial.description}
          onChange={(e) => setNewSpecial({ ...newSpecial, description: e.target.value })}
        />
        <input
          type="file"
          onChange={(e) => setNewSpecial({ ...newSpecial, image: e.target.files[0] })}
        />
        <button onClick={handleAddSpecial}>Add Special</button>
      </div>
    </div>
  );
};

export default AdminPanel;
