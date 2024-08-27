// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Importer le fichier CSS pour les styles

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Effectuer la requête HTTP pour obtenir les données des utilisateurs
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []); // Le tableau vide signifie que cet effet s'exécute uniquement au montage du composant

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
