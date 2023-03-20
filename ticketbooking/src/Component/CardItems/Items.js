import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Items = (image) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}/>
      <CardMedia
        sx={{ height: 140 }}
        image={image.image}
        title="green iguana"
      />
    </div>
  )
  }

export default Items