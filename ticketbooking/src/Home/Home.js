
import React from 'react'
import Items from '../Component/CardItems/Items';
import Image from '../Image.json';

const Home = () => {
  console.log("Image", Image)
  return (
    <div className='car'>  
        <div className='carimg'>
            {
              Image?.map((Image,index)=>(
                <Items image={Image} key={index}/>
              ))
            }
        </div>
    </div>
  
  )
}

export default Home
