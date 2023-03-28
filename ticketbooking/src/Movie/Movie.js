import { Diversity1 } from '@mui/icons-material';
import React from 'react'
import { useParams } from 'react-router-dom';
import Image from "../Image.json";
import "../Movie/Movie.css";
const Movie = () => {
  const {ids}=useParams();
  console.log(ids)
    let getData=Image.find((e)=>e.id==ids)
    console.log(getData);
  return (
    <div>
      <div className='bgimg' style={{background:`linear-gradient(to right,black,transparent),url(${getData.backgroundimage})`}}height="50vh" width='100%'>
        <div className='movi'>
          <div className='moviename'>
             <img src={getData.image} alt="movie" ></img>
           </div>
           <div className="moviebtn">
            <div className='moviebut'>
              <h2>{getData.MovieName}</h2>
              <button>Book tickets</button>
              </div>
          </div> 
        </div>
      </div>
    </div>

  )
}

export default Movie
