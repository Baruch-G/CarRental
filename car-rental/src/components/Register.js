import React from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FilledInput from '@mui/material/FilledInput'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { OutlinedFlagOutlined } from '@mui/icons-material'

const Register = () => {
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    id: '',
    password: '',
    ensurePass: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    email: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const postUser = async (e) => {
    e.preventDefault()
    var userInfo = {
      id: values.id,
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password,
      email: values.email,
      gender: 1,
    }
    const res = await fetch(`http://localhost:5000/users/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
    console.log(res.json())
  }

  return (
    <center>
      <Card style={cardStyle} sx={{ minWidth: 100 }}>
        <form style={gridStyle} onSubmit={postUser}>
          <div style={{ justifySelf: 'end' }}>
            <Link to="/">
              {' '}
              <FaTimes style={{ color: 'red', fontSize: 22 }} />
            </Link>
          </div>
          <CardContent>
            <h3>נא מלאו את השדות הבאים</h3>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment">שם פרטי</InputLabel>
              <FilledInput
                id="first-name"
                type="text"
                value={values.firstName}
                onChange={handleChange('firstName')}
              />
            </FormControl>
            <br></br>

            <FormControl sx={{ m: 1, width: '50ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment">שם משפחה</InputLabel>
              <FilledInput
                id="last-name"
                type="text"
                value={values.lastName}
                onChange={handleChange('lastName')}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: '50ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment">מספר זהות</InputLabel>
              <FilledInput
                id="id-num"
                type="text"
                value={values.id}
                onChange={handleChange('id')}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: '50ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">סיסמא</InputLabel>
              <FilledInput
                id="pass"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">סיסמא</InputLabel>
              <FilledInput
                id="ensure-pass"
                type={values.showPassword ? 'text' : 'password'}
                value={values.ensurePass}
                onChange={handleChange('ensurePass')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment">כתובת דוא"ל</InputLabel>
              <FilledInput
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
              />
            </FormControl>
          </CardContent>
          <Button
            style={{ width: 300 }}
            type="submit"
            size="large"
            variant="contained"
            disabled={false}
          >
            הרשמה
          </Button>
        </form>
      </Card>
    </center>
  )
}
const textFieldStyle = {
  width: 400,
  marginTop: 20,
}
const gridStyle = {
  display: 'grid',
  justifyItems: 'center',
}
const cardStyle = {
  marginTop: 20,
  width: 600,
  padding: 10,
}

export default Register
