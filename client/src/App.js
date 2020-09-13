import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD APP</h1>
      <div className="movie-form" >
        <label htmlFor="Movie Name">Movie Name</label>
      <input type="text" name="movieName"/>
        <label htmlFor="Review">Review</label>
      <input type="text" name="review"/>
    <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
