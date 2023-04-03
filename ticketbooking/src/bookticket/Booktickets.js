import React from 'react'
import { useParams } from 'react-router-dom';
import Image from "../Image.json"
import './Bookticket.css';
const Booktickets = () => {
const {ticket}=useParams()
   let checkData =Image.find((e)=>e.MovieName==ticket)
   console.log(checkData    );
const date1=new Date()
const date2=date1.getDate()

const date3=new Date()
const date4=date3.getDate()

const date5=new Date()
const date6 = date5.getDate() 

return (
<div>
     <div className='tamil'>
       
            <div className='tamil1'>
                <h1>{checkData.MovieName}-Tamil</h1>
            </div>
    </div> 
    
  <div className='ticketmain'>
        <div className='container'>
             <div className='ticket1'>
                <div className='ticket2'>
                
                    <div className='date1'>
                        {date2}
                    </div>
                    <div className='date2'>
                        {date4 +1}
                    </div>
                    <div className='date2'>
                        {date6 +2}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='bag'>
            <div className='container'>
                <div className='the'>
                    <div className='theatormain'>
                        <div className='theatorname'>
                            <h2>Jothi Theatre:chennai</h2>
                        </div>
                        <div className='timemain'>
                            <div className='time'>
                            <h3>10:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>2:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>6:45 AM</h3> 
                            </div>
                        </div>
                    </div>
                    <div className='theatormain'>
                        <div className='theatorname'>
                            <h2>Kasi Talkies:chennai</h2>
                        </div>
                        <div className='timemain'>
                            <div className='time'>
                            <h3>10:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>2:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>6:45 AM</h3> 
                            </div>
                        </div>
                    </div>
                    <div className='theatormain'>
                        <div className='theatorname'>
                            <h2>Albert Theatres:chennai</h2>
                        </div>
                        <div className='timemain'>
                            <div className='time'>
                            <h3>10:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>2:45 AM</h3> 
                            </div>
                            <div className='time'>
                            <h3>6:45 AM</h3> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
</div>
)
}

export default Booktickets
