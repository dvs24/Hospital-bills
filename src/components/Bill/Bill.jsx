import React from 'react'
import './Bill.css'

const Bill = (props) => {

    
    
    return (
        <div className='bill'>
            <div className="amount">
                <div className="printBill">
                    <span>Billing Details</span>
                    <button>Print Bill</button>
                </div>


                <div className="patientInfo">
                    <div className="questions">
                        <span>Patient Name</span>
                        <span>Age/Gender</span>
                        <span>Bill No</span>
                        <span>Date/Time</span>
                        <span>Receipt No</span>
                    </div>
                    {props.active === 'first' && 

                        <div className="answers">
                                                
                        <span className='pr'>Sourav Singh</span>
                        <span>20/Male</span>
                        <span>021234556</span>
                        <span>30/06/23, 04:12</span>
                        <span>024395433</span>
                        </div>
                    
                    }
                    {props.active === 'second' && 

                        <div className="answers">
                                                
                        <span className='pr'>Mahendar Singh</span>
                        <span>21/Male</span>
                        <span>021234123</span>
                        <span>29/06/23, 04:11</span>
                        <span>024395432</span>
                        </div>
                    
                    }
                    {props.active === 'third' && 

                        <div className="answers">
                                                
                        <span className='pr'>Mahipal Singh</span>
                        <span>22/Male</span>
                        <span>021234456</span>
                        <span>28/06/23, 04:10</span>
                        <span>024395431</span>
                        </div>
                    
                    }
                    {props.active === 'fourth' && 

                        <div className="answers">
                                                
                        <span className='pr'>Puneet Singh</span>
                        <span>23/Male</span>
                        <span>012345678</span>
                        <span>27/06/23, 04:09</span>
                        <span>024395430</span>
                        </div>
                    
                    }
                    {props.active === 'fifth' && 

                        <div className="answers">
                                                
                        <span className='pr'>Abhishek Singh</span>
                        <span>20/Male</span>
                        <span>021234556</span>
                        <span>35/06/23, 04:08</span>
                        <span>024395429</span>
                        </div>
                    
                    }
                   
                </div>

                <div className="services">
                    <div>
                        <span className= 'bold'>Sr. No</span>
                        <span className= 'bold'>Services Name</span>
                        <span className= 'bold'>Price</span>
                        <span className= 'bold'>Quality</span>
                        <span className= 'bold'>Amount</span>
                    </div>
                    <hr />
                    <div>
                        <span>1</span>
                        <span>Consullation</span>
                        <span>500</span>
                        <span>1</span>
                        <span>500</span>
                    </div>
                    <div>
                        <span className='pr-2'>2</span>
                        <span >X-Ray</span>
                        <span>1500</span>
                        <span>2</span>
                        <span>3000</span>
                    </div>

                </div>

                <div className="finalAmount">
                    <div>
                        <span>Mobile No</span>
                        <span>4264638574</span>
                    </div>
                    <div>
                        <span> Tax</span>
                        <span>200</span>
                    </div>
                    <div>
                        <span>Discount</span>
                        <span>50</span>
                    </div>
                    <hr />
                    <div>
                        <span>Total </span>
                        <span>4000</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bill