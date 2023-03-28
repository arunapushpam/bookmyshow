import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import "./Items.css";
import { useNavigate } from 'react-router-dom';
const Items = ({image}) => {
  const navigate = useNavigate()
  console.log(image)
  return (
    
    <div className='movie'> 
      
      <div className='container'>
      
          <Card sx={{ maxWidth:200, mt:2 }}>
            <CardMedia
              component="img"
              height="330"
              display="flex"
              image={image.image}
              onClick={()=>navigate(`/Movie/${image.id}`)}
            />
          </Card>
             <div className="itemshead">
                  <h2>{image.MovieName}</h2>
                  <h5>{image.Discription}</h5>
             </div>
          </div>

    </div>
  )
  } 

export default Items