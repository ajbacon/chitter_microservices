import React, { useState } from 'react';
import axios from 'axios';

const CreateComment = ({ chirpId }) => {
  const [content, setContent] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${chirpId}/comments`, {
      content,
    });
    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className='form-control'
          onChange={(e) => setContent(e.target.value)}
          type='text'
          style={{ marginBottom: '10px' }}
        />
        <button className='btn btn-primary btn-sm'>Add Comment</button>
      </form>
    </div>
  );
};

export default CreateComment;
