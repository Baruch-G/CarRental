import React from 'react'
import CarCard from './CarCard'
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import CarFilter from './CarFilter'

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
      <CarFilter />
      <Grid
        container
        style={{ marginTop: 20 }}
        justifyContent="center"
        alignItems="center"
        rowSpacing={6}
        columnSpacing={{ xs: 2, sm: 4, md: 3 }}
      >
        {cars.map((car) => (
          <Grid key={car.id} item xs={12} sm={4} md={3}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default FindCar
