import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



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
              element={<Profile profilePage={props.state.profilePage} 
              dispatch = {props.dispatch}  />} />
              <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} 
              addMessage = {props.addMessage}
              updateNewMessage = {props.updateNewMessage} />} />
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
