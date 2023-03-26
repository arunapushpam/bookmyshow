import React from 'react'
import '../Fooder/Fooder.css';
import bookmyshowlogo from "../assets/image/bookmyshowlogo.png";
const Fooder = () => {
  return (
    <div>
      <div className='footer'>
        <div className='foot'>
            <div className='foothr'>
                <hr></hr>
            </div>
            <div className='footimg'>
            <img src={bookmyshowlogo} />
            </div>
            <div className='foothr'>
                <hr></hr>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Fooder