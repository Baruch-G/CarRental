import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem'

const CarFilter = () => {
  const [brand, setBrand] = useState('')
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  const handleChangeModel = (event) => {}

  useEffect(() => {
    const setStateBrands = async () => {
      const brandsRes = await fetchBrands()
      setBrands(brandsRes)
    }

    setStateBrands()
  }, [])

  const handleChangeManuf = (event) => {
    const t = event.target.value
    console.log(t)
    setBrand({ value: t })
    console.log(brand)

    setModels(brands.find((i) => i.brand == brand).models)
    //console.log(brands.find((i) => i.brand == brand))
  }

  const fetchBrands = async () => {
    const res = await fetch('http://localhost:5000/carModels')
    const data = await res.json()

    return data
  }

  return (
    <div
      style={{
        border: '1px solid',
        borderRadius: '16px',
        color: '#ccc',
        width: '50%',
        display: 'block',
        margin: '20px',
      }}
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="select-brand"
            select
            type="text"
            label="יצרן"
            name="SelectBrand"
            value={brand}
            onChange={handleChangeManuf}
            helperText="בחר יצרן רכב"
            defaultValue=""
          >
            {brands.map((car, index) => (
              <p key={index}>{car.brand}</p>
            ))}
          </TextField>

          <TextField
            id="select-mdoel"
            select
            label="דגם"
            onChange={handleChangeModel}
            helperText="בחר דגם"
            defaultValue=""
          >
            {models.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </TextField>

          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
      </Box>
    </div>
  )
}
export default CarFilter
