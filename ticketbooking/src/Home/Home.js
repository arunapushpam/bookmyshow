
import React from 'react'
import Items from '../Component/CardItems/Items';
import Fooder from '../Fooder/Fooder';
import Image from '../Image.json';
import "../Home/Home.css"

const Home = () => {
  console.log("Image", Image)
  return (
    <div className='car'> 
      <div className='container'>
          <div className="cards">
            <h2>Recommended Movies</h2> 
          </div>
        <div className='carimg'>
            {
              Image?.map((image,index)=>(
                <Items image={image} key={index}/>
              ))
            }
        </div>
      </div>
          <Fooder/>
    </div>
  
  )
}

export default Home
