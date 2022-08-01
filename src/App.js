import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from './redux/AppReducer';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Preloader from './components/Common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
		this.props.initializeApp();
	} 

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className='app-bg'>
          <div className='app-wrapper'>
            <HeaderContainer />
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
                <Route path="/login/*" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializeApp}) (App) ;
