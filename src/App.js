import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://www.meme-arsenal.com/memes/5ccc9b0b8134a0d77109dda7baf6cc10.jpg'></img>
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Message</div>
      </nav>
      <div className='content'>
        Main content
      </div>
    </div>
  )
};

export default App;
