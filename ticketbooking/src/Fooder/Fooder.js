import React from 'react'
import '../Fooder/Fooder.css';
import bookmyshowlogo from "../assets/image/bookmyshowlogo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Fooder = () => {
  return (
    <div>
      <div className='footer'>
        <div className='container'>
          <div className='foot'>
              <div className='foothr'>
                  <hr></hr> 
              </div>
              <div className='footimg'>
                <img src={bookmyshowlogo} alt="loge" />
              </div>
              <div className='foothr'>
                  <hr></hr>
              </div>
          </div>
          <div className='ficon'>
            <div className='facebook'>
              <FacebookIcon />
            </div>
            <div className='facebook'>
              <TwitterIcon />
            </div>
            <div className='facebook'>
              < InstagramIcon />
            </div>
            <div className='facebook'>
              < YouTubeIcon />
            </div>
            <div className='facebook'>
              < PinterestIcon />
            </div>
            <div className='facebook'>
              < LinkedInIcon/>
            </div>
          </div>
         </div>

      </div>
    </div>
  )
}

export default Fooder
