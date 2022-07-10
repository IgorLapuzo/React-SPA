import React from 'react';
import { NavLink } from 'react-router-dom';
import clases from './SideBar.module.css';

const SideBar = () => {
	return (
    <nav className={clases.sidebar}>
      <div>
        <NavLink to='/profile' className = {navData => navData.isActive ? clases.active : clases.item}>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs' className = {navData => navData.isActive ? clases.active : clases.item}>Dialogs</NavLink>
      </div>
      <div>
        <NavLink to='/users' className = {navData => navData.isActive ? clases.active : clases.item}>Users</NavLink>
      </div>
      <div>
        <NavLink to='/music' className = {navData => navData.isActive ? clases.active : clases.item}>Music</NavLink>
      </div>
      <div>
        <NavLink to='/settings' className = {navData => navData.isActive ? clases.active : clases.item}>Settings</NavLink>
      </div>
    </nav>
  )
};

export default SideBar;