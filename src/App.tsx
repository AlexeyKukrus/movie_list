import React, { useState } from 'react';
import { MovieList } from './components/MovieList/MovieList';
import { Header } from './components/Header/Header';
import './main.css'

function App() {
  const [searchParam, setSearchParam] = useState('return')
  const handleSearchMovie = (value: string) => {
    if (searchParam !== value) {
      setSearchParam(value);
    }
  }
  return (
    <div className='container'>
      <Header 
        onSearch={handleSearchMovie}
      />
      <MovieList 
        search={searchParam}
      />
    </div>
    
  );
}

export default App;
