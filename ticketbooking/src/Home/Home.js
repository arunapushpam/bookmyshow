
import React from 'react'
import Items from '../Component/CardItems/Items';
import Fooder from '../Fooder/Fooder';
import Image from '../Image.json';
import Image1 from "../Image1.json";
import "../Home/Home.css"

const Home = () => {
  console.log("Image", Image)
  return (
    <div className='car'> 
      <div className='container'>
      <h2>Recommended Movies</h2> 
        <div className='carimg'>
            
            {
              Image?.map((image,index)=>(
                <Items image={image} key={index}/>
              ))
            }
          </div>
      </div>
      <div className='container'>
        <div className='carimg1'>
            
            {
              Image1?.map((image,index)=>(
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
