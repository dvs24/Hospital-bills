import './App.css';

import React,{useState} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import next from './assests/next.png';
import before from './assests/before.png'
import PatientCard from './components/PatientCard/PatientCard';
import Bill from './components/Bill/Bill';
import Data from './Data';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './components/Pages/Dashboard';
import Appointment from './components/Pages/Appointment';
import Patient from './components/Pages/Patient';
import Support from './components/Pages/Support';
import Setting from './components/Pages/Setting';
// import Name1 from './components/Pages/Name1';




function App() {

  const [active, setActive] = useState('first');
  
  return (


    <>
      <Router>
        <div className="firstPart">

          <div className="app">


            <Sidebar />


          </div>

          <div className="secondPart">
            <div className='w-100'>

              <Navbar />
              <div className="info">
                <h2>Billing Overview</h2>
                <div className="date">
                  <button className='arrowBtn'>
                    <img src={before} alt="" />
                  </button>
                  <span>February 2021</span>
                  <button className='arrowBtn'>
                    <img src={next} alt="" />
                  </button>
                </div>
              </div>


            </div>
            <Routes>
              <Route path='/' element={
                <div className="billingDetail">

                  <div className='w-30'><PatientCard setActive = {setActive} /></div>
                  <div><Bill data = {Data} active = {active} /></div>
                </div>

              }></Route>
              <Route path='/Dashboard' element={<Dashboard />}> </Route>
              <Route path='/Appointment' element={<Appointment />}></Route>
              <Route path='/Patient' element={<Patient />}></Route>
              <Route path='/Support' element={<Support />}></Route>
              <Route path='/Setting' element={<Setting />}></Route>
              {/* <Route path='/name1' element={<Name1 />}></Route> */}

            </Routes>

          </div>

        </div>
      </Router>
    </>
  );
}

export default App;
