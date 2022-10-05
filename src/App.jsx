import React from 'react';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/content/Dialogs/DialogsContainer';
import News from './components/content/News/News';
import Music from './components/content/Music/Music';
import UsersContainer from './components/content/Users/UsersContainer';
import Error from './components/content/404/404';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProfileContainer from './components/content/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import SettingsContainer from './components/content/Settings/SettingsContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<ProfileContainer />} />
            <Route path='/profile'>
              <Route path=':userID' element={<ProfileContainer />} />
              <Route path='' element={<ProfileContainer />} />
            </Route>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<SettingsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
