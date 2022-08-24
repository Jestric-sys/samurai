import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/content/Profile/Profile';
import Dialogs from './components/content/Dialogs/Dialogs';
import News from './components/content/News/News';
import Music from './components/content/Music/Music';
import Settings from './components/content/Settings/Settings';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.profilePage.friends} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path='/profile/*' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path='/dialogs/*' element={<Dialogs state={props.state} />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
