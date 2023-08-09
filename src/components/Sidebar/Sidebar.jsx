import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';
import dashboard from '../../assests/dashboard.png';
import appointment from '../../assests/appointment.png';
import patient from '../../assests/patient.png';
import billing from '../../assests/bill.png';
import support from '../../assests/support.png';
import setting from '../../assests/setting.png';

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="logo">
                <h2>LOGO</h2>
            </div>

            <div className="sideBtn">
                <ul>
                    <li>
                        <Link to='/Dashboard'>
                            <div className="sideImg">
                                <img className='white' src={dashboard} alt="Appointment" />
                                <button className='btn'> Dashboard</button>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to='/Appointment'>
                            <div className="sideImg">
                                <img className='white' src={appointment} alt="Appointment" />
                                <button className='btn'> appointment</button>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Patient'>
                            <div className="sideImg">
                                <img className='white' src={patient} alt="Patient" />
                                <button className='btn'> Patient</button>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className="sideImg">
                                <img className='white' src={billing} alt="Billing" />
                                <button className='btn'> Billing</button>
                            </div>
                        </Link>
                    </li>



                </ul>



            </div>

            <div className="sideOptions">
                <ul>

                    <li>
                        <Link to='/Support'>
                            <div className="sideOption">
                                <img className='white' src={support} alt="" />
                                <button className='btn'> Support</button>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Setting'>
                            <div className="sideOption">
                                <img className='white' src={setting} alt="" />
                                <button className='btn'> Setting</button>
                            </div>
                        </Link>
                    </li>



                </ul>
            </div>
        </div>
    )
}

export default Sidebar