import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/content/Profile/Profile';
import DialogsContainer from './components/content/Dialogs/DialogsContainer';
import News from './components/content/News/News';
import Music from './components/content/Music/Music';
import Settings from './components/content/Settings/Settings';
import UsersContainer from './components/content/Users/UsersContainer';
import Error from './components/content/404/404';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/profile/*' element={<Profile />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;