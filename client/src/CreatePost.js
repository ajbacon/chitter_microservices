import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/posts', {
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
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;

// return (
//   <div>
//     <form onSubmit={onSubmit}>
//       <div className='form-group'>
//         <label>Title</label>
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className='form-control'
//         />
//       </div>
//       <button className='btn btn-primary'>Submit</button>
//     </form>
//   </div>
// );
