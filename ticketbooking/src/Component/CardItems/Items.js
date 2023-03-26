import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import "./Items.css"

const Items = ({image}) => {
  return (
    
    <div className='movie'> 
      
      <div className='container'>
      
          <Card sx={{ maxWidth:180 }}>
            <CardMedia
              component="img"
              height="330"
              image={image.image}
            />
          </Card>
          
      </div>

    </div>
  )
  } 

export default Items