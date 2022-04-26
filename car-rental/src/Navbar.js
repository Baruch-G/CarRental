import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import LoginIcon from '@mui/icons-material/Login'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import InventoryIcon from '@mui/icons-material/Inventory'

export default function Navbar({ user }) {
  React.useEffect(() => {
    console.log('W')
  })
  const tabItems = [
    {
      id: 'login',
      content: 'Log In',
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
      content: 'Find a car',
      link: '/find-car',
      icon: <SearchIcon />,
      isVisible: true,
    },
    {
      id: 'inventory-management',
      content: 'Inventory Management',
      link: '/inventory-management',
      icon: <InventoryIcon />,
      isVisible: true,
    },
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#343A40' }}>
        <Toolbar>
          <img
            style={{ height: '40px' }}
            src={require('./assets/FooterLogo.png')}
          ></img>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

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
  textTransform: 'none',
  letterSpacing: '1.2px'
}
const glomImgStyle = {
  fontSize: 12,
}

const glomImg = '../../../public/Logo.png'
