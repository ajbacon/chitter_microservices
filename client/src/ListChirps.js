import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListChirps = () => {
  const [chirps, setChirps] = useState({});

  const fetchChirps = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    setChirps(res.data);
  };

  useEffect(() => {
    fetchChirps();
  }, []);

  const renderChirps = () => {
    return Object.values(chirps).map((chirp) => {
      return (
        <div
          className='card'
          key={chirp.id}
          style={{
            width: '40%',
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '10px',
          }}
        >
          <h4>{chirp.title}</h4>
        </div>
      );
    });
  };

  return <div>{renderChirps()}</div>;
};

export default ListChirps;
