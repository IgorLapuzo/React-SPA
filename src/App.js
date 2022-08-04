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
import HeaderContainer from './components/Header/HeaderContainer';
import Preloader from './components/Common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));

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
              <React.Suspense fallback = {<Preloader />}>
                <Routes>
                  <Route path="/profile/:userId" 
                  element={<ProfileContainer />} />
                  <Route path="/dialogs/*" 
                  element={<DialogsContainer />} />
                  <Route path="/users/*" element={<UsersContainer />} />
                  <Route path="/music/*" element={<Music />} />
                  <Route path="/settings/*" element={<Settings />} />
                  <Route path="/login/*" element={<Login />} />
                  <Route path="/profile/*" 
                  element={<ProfileContainer />} />
                </Routes>
              </React.Suspense>
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
