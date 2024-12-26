// src/components/MyComponent.js
import React, { useEffect, useState } from 'react';
import api from '../services/api.ts';

function MyComponent() {
  const [data, setData] = useState([]);
  const newItem = { name: "Shashank"};

  useEffect(() => {
    api.get('/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        error? 
        setData([...data, newItem]): console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
