import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import LoginIcon from '@mui/icons-material/Login'

export default function Navbar() {
  const tabItems = [
    {
      content: 'התחברות',
      link: '/login',
      icon: <LoginIcon />,
    },
    {
      content: 'מצא רכב',
      link: '/find-car',
      icon: <SearchIcon />,
    },
  ]

  return (
    <Box style={{ direction: 'rtl' }} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            גלובוס אוטו
          </Typography>

          {tabItems.map((item, index) => (
            <Link key={index} to={item.link}>
              <Button style={navBtnStyle} color="inherit">
                {item.content}
                {item.icon}
              </Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const navBtnStyle = {
  color: 'white',
}
