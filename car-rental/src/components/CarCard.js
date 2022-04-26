import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import './CarCard.css'

export default function CarCard({ car }) {
  const [showOrderBtn, setShowOrderBtn] = useState([])
  useEffect(() => {
    setShowOrderBtn(false)
  }, [])

  function MouseOver(event) {
    if (!showOrderBtn) setShowOrderBtn(true)
  }

  function MouseOut(event) {
    if (showOrderBtn) setShowOrderBtn(false)
  }

  return (
    <div
      className="card-container"
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
    >
      <Card sx={{ display: 'flex' }} className="overflow-hidden">
        <CardContent style={{ width: '35%' }}>
          <div style={{ height: '80%' }}>
            <Typography gutterBottom variant="h5" component="div">
              {car.brand}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              {`Model: ${car.model}`}
            </Typography>

            <Typography variant="body2">
              {`KM: ${new Intl.NumberFormat().format(car.MileageKM)}`}
            </Typography>

            <Typography variant="body2">{`year: ${car.year}`}</Typography>

            <Typography
              style={{ fontWeight: 'bold', marginTop: 2 }}
              variant="h7"
            >
              {`price : ${car.dailyCost}₪`}
            </Typography>
          </div>

          <button
            style={{ height: '20%'}}
            className={!showOrderBtn ? 'mybtn' : 'mybtn slide-in'}
          >
            <span>Details & Order</span>
          </button>
        </CardContent>
        <CardMedia
          className="img-area"
          image={car.img ? car.img : imgNotAvialable}
          alt="green iguana"
        />
      </Card>
    </div>
  )
}

const imgNotAvialable =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGNnSQlcE_u92wxs89AZ0bqCbRycEGoBxNg9G35UZx-SHN_8DZtLaZy5svjBo733hgi48&usqp=CAU'
