import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-bg'>
        <div className='app-wrapper'>
          <Header />
          <SideBar />
          <div className='app-wraper-content'>
            <Routes>
              <Route path="/profile/*" 
              element={<Profile store={props.store} />} />
              <Route path="/dialogs/*" 
              element={<DialogsContainer store={props.store} />} />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
