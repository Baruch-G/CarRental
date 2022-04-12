import React from 'react'
import CarCard from './CarCard'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'

const FindCar = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const setStateCars = async () => {
      const carsRes = await fetchCars()
      setCars(carsRes.slice(0, 25))
    }

    setStateCars()
  }, [])

  const fetchCars = async () => {
    const res = await fetch('http://localhost:5000/carStockpile')
    const data = await res.json()

    return data
  }

  return (
    <div style={{ direction: 'rtl' }}>
      <Grid
        container
        style={{ marginTop: 20 }}
        justifyContent="center"
        alignItems="center"
        rowSpacing={6}
        // columnSpacing={{ xs: 2, sm: 4, md: 3 }}
      >
        {cars.map((car) => (
          <Grid key={car.id} item>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default FindCar
