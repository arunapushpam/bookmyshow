// import { Diversity1 } from '@mui/icons-material';
import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import Image from "../Image.json";
import "../Movie/Movie.css";

const Movie = () => {
  const {ids}=useParams();
  console.log(ids)
    let getData=Image.find((e)=>e.id==ids)
    console.log(getData);
    const navigate=useNavigate()
    const ticket=()=>{
      navigate('/bookticket')
    }
  return (
    <div>
      <div className='bgimg' style={{background:`linear-gradient(to right,black,transparent),url(${getData.backgroundimage})`}} >
        <div className='movi'>
          <div className='moviename'>
             <img src={getData.image} alt="movie" ></img>
           </div>
           <div className="moviebtn">
            <div className='moviebut'>
              <h2>{getData.MovieName}</h2>
              <button onClick={()=>ticket()}>Book tickets</button>
              </div>
          </div> 
        </div>
      </div>
    </div>

  )
}

export default Movie
