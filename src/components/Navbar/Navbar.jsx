import React from 'react'
import './Navbar.css';
import notification from '../../assests/notification.png'
import searchIcon from "../../assests/searchIcon.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <button className='searchBtn'>
            <img src={searchIcon} alt=""  />
        </button>
        <input type="text" placeholder='Search Patients' />
        <button className='navBtn'>Make an Appointment</button>
        <button className='navBtn'>Add Patient</button>
        <button className='noti'>
        <img src= {notification} alt="" />
        </button>

    </div>
  )
}

export default Navbar