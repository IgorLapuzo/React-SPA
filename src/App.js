import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-bg'>
        <div className='app-wrapper'>
          <Header />
          <SideBar />
          <div className='app-wraper-content'>
            <Routes>
              <Route path="/profile/:userId" 
              element={<ProfileContainer />} />
              <Route path="/dialogs/*" 
              element={<DialogsContainer />} />
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
