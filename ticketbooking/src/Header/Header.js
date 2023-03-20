import React from 'react'
import bookmyshowlogo from "../assets/image/bookmyshowlogo.png"
import "./Header.css";

const Header = () => {
  return (
    <div>
        <>
        <div className='header'>
        
            <div className='container'>
                <div className='logo'>
                    <div className='photo'>
                        <div className='img'>
                            <img src={bookmyshowlogo} />
                        </div>
                        <div className='inp'>
                            <input  placeholder='   Search for Movie,Events,plays,Sports,Activities'></input>
                        </div>
                    </div>
                    <div className='signin'>
                        <div className='btn'>
                            <button>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='nav'>
            <div className='container'>
                <div className='movie'>
                    <a href='#'>Movies</a>
                    <a href='#'>Events</a>
                    <a href='#'>Plays</a>
                    <a href='#'>Sports</a>
                    <a href='#'>Activities</a>
                    <a href='#'>Buzz</a>
                </div>
            </div>
        </div>
        <div className='unlock'>
            <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1677493393240_web.jpg'></img>
        </div>
        </>
    </div>
  )
}

export default Header
