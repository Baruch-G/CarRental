import React from 'react'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
import { createTheme } from '@mui/material/styles'

const Filter = () => {
  const [models, setModels] = useState([])

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
  ]

  useEffect(() => {
    const setCarModels = async () => {
      const modelsRes = await fetchCarModels()
      setModels(modelsRes)
    }

    setCarModels()
  }, [])

  const fetchCarModels = async () => {
    const res = await fetch('http://localhost:5000/carModels')

    const modelRes = await res.json()
    return modelRes
  }

  return (
    <div>
      <Autocomplete
        id="highlights-demo"
        style={{ backgroudColor: 'red' }}
        size="small"
        sx={{
          width: 300,
          '&hover .MuiAutocomplete-root': {
            borderColor: 'red',
            color: 'red',
            backgroundColor: 'red',
          },
        }}
        options={models}
        getOptionLabel={(option) => option?.brand}
        renderInput={(params) => (
          <TextField {...params} label="Highlights" margin="normal" />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.brand, inputValue)
          const parts = parse(option.brand, matches)

          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          )
        }}
      />
    </div>
  )
}

export default Filter