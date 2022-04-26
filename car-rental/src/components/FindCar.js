import React from 'react'
import CarCard from './CarCard'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Filter from './Filter'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const FindCar = () => {
  const [cars, setCars] = useState([])
  const [filterActive, setFilterActive] = useState(false)

  useEffect(() => {
    const setStateCars = async () => {
      const carsRes = await fetchCars()
      setCars(carsRes)
    }

    setStateCars()
  }, [])

  const filterVisibilityToggle = () => {
    setFilterActive(!filterActive);
  }

  const fetchCars = async () => {
    const res = await fetch('http://localhost:5000/carStockpile')
    const data = await res.json()

    return data
  }

  return (
    <div>
      {filterActive ? 
      <div>
        <Filter />
        <FilterAltOffIcon onClick={filterVisibilityToggle}/>
      </div> :

      <FilterAltIcon onClick={filterVisibilityToggle}/>}
      
      <Grid
        container
        style={{ marginTop: 20 }}
        justifyContent="center"
        alignItems="center"
        rowSpacing={6}
        columnSpacing={{ xs: 2, sm: 4, md: 3 }}
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
