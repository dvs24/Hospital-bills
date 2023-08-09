import React  from 'react';
import './PatientCard.css';
import profile from '../../assests/profile.jpg';
// import { Link } from 'react-router-dom';

// import data from '../../Data';
// import Bill from '../Bill/Bill'

const PatientCard = (props) => {

    
    const handleClick1 = () =>{
        props.setActive('first');
        console.log('clicked 1')
    }
    const handleClick2 = () =>{
        props.setActive('second');
        console.log('clicked 1')
    }
    const handleClick3 = () =>{
        props.setActive('third');
        console.log('clicked 3')
    }
    const handleClick4 = () =>{
        props.setActive('fourth');
        console.log('clicked 4')
    }
    const handleClick5 = () =>{
        props.setActive('fifth');
        console.log('clicked 5')
    }



    return (

        <>



            <div className='patientCard' onClick={handleClick1} >

                <img src={profile} alt='Profile' />


                <div className="personInfo">
                    <div>Sourav Singh</div>
                    <span>20, Male</span>
                    <div>Bill no : 021234556</div>

                </div>
            </div>
            <div className='patientCard' onClick={handleClick2} >

                <img src={profile} alt='Profile' />


                <div className="personInfo">
                    <div>Mahendar Singh</div>
                    <span>21, Male</span>
                    <div>Bill no : 021234123</div>

                </div>
            </div>
            <div className='patientCard' onClick={handleClick3} >

                <img src={profile} alt='Profile' />


                <div className="personInfo">
                    <div>Mahipal Singh</div>
                    <span>22, Male</span>
                    <div>Bill no : 021234456</div>

                </div>
            </div>
            <div className='patientCard' onClick={handleClick4} >

                <img src={profile} alt='Profile' />


                <div className="personInfo">
                    <div>Puneet Singh</div>
                    <span>23, Male</span>
                    <div>Bill no : 012345678</div>

                </div>
            </div>
            <div className='patientCard' onClick={handleClick5} >

                <img src={profile} alt='Profile' />


                <div className="personInfo">
                    <div>Abhishek Singh</div>
                    <span>24, Male</span>
                    <div>Bill no : 021234556</div>

                </div>
            </div>








        </>
    )
}

export default PatientCard