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
        <div key={chirp.id}>
          <div>{chirp.title}</div>
        </div>
      );
    });
  };

  return <div>{renderChirps()}</div>;
};

export default ListChirps;
