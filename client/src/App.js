import React from 'react';
import CreateChirp from './CreateChirp';
import ListChirps from './ListChirps';

function App() {
  return (
    <div className='container'>
      <h1>Chitter</h1>
      <hr />
      <h2>Create Chirp</h2>
      <CreateChirp />
      <hr />
      <h2>Chirps</h2>
      <ListChirps />
    </div>
  );
}

export default App;
