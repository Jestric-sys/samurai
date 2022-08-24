import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/content/Profile/Profile';
import DialogsContainer from './components/content/Dialogs/DialogsContainer';
import News from './components/content/News/News';
import Music from './components/content/Music/Music';
import Settings from './components/content/Settings/Settings';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer store={props.store} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile store={props.store} />} />
            <Route path='/profile/*' element={<Profile store={props.store} />} />
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
