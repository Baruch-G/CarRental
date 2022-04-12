import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import './CarCard.css'

export default function CarCard({ car }) {
  return (
    <Card className="overflow-hidden">
      <CardMedia
        className="img-area"
        image={
          car.img
            ? car.img
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGNnSQlcE_u92wxs89AZ0bqCbRycEGoBxNg9G35UZx-SHN_8DZtLaZy5svjBo733hgi48&usqp=CAU'
        }
        alt="green iguana"
      />
      <CardContent style={{ direction: 'rtl' }}>
        <Typography gutterBottom variant="h5" component="div">
          {car.brand}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {car.model}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {`קילומטרז': ${new Intl.NumberFormat().format(car.MileageKM)}`}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {`שנתון: ${car.year}`}
        </Typography>

        <Typography
          style={{ fontWeight: 'bold', marginTop: 2 }}
          variant="h7"
          color="text.secondary"
        >
          {`מחיר ליום: ${car.dailyCost}₪`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
