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
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function Navbar({ user }) {
  React.useEffect(() => {
    console.log(user.firstName)
  })
  const tabItems = [
    {
      id: 'login',
      content: 'התחברות',
      link: '/login',
      icon: <LoginIcon />,
      isVisible: !user.firstName,
    },
    {
      id: 'userIcon',
      content: user.firstName,
      link: '/',
      icon: <AccountCircleIcon />,
      isVisible: user.firstName,
    },
    {
      id: 'findCar',
      content: 'מצא רכב',
      link: '/find-car',
      icon: <SearchIcon />,
      isVisible: true,
    },
  ]

  return (
    <Box style={{ direction: 'rtl' }} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            גלובוס אוטו
          </Typography>

          {tabItems
            .filter((i) => i.isVisible)
            .map((item) => (
              <React.Fragment key={item.id}>
                <Link to={item.link}>
                  <Button style={navBtnStyle} color="inherit">
                    {item.content}
                    {item.icon}
                  </Button>
                </Link>
              </React.Fragment>
            ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const navBtnStyle = {
  color: 'white',
}
