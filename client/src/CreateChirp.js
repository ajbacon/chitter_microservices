import React, { useState } from 'react';
import axios from 'axios';

function CreateChirp() {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title,
    });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='form-control'
          style={{ width: '50%', borderRadius: '10px', marginBottom: '10px' }}
        />
        <button className='btn btn-primary btn-sm'>Submit</button>
      </form>
    </div>
  );
}

export default CreateChirp;
