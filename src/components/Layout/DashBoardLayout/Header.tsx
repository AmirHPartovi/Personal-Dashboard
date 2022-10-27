import React from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
  setOpen:React.Dispatch<React.SetStateAction<boolean>>
  open:boolean
}

const Header = ({setOpen,open}: Props) => {

  const handleOpen = () =>{
    setOpen(!open)
  }
  return (
    <AppBar color={'secondary'} sx={{zIndex:1300}}>
      <ToolBar>
          <IconButton onClick={handleOpen}>
            <MenuIcon fontSize='large' sx={{color:'white'}}/>
          </IconButton>
          <Typography variant={'h4'} component={'h1'}>
            {'Shopify'}
          </Typography>
          <Box display={'flex'} flexGrow={1} justifyContent={'flex-end'}>
          <IconButton>
            <Avatar>
              <PersonIcon fontSize='large'/>
            </Avatar>
          </IconButton>
          <IconButton>
          <NotificationsIcon fontSize='large'sx={{color:'white'}}/>
          </IconButton>
          <IconButton>
          <SettingsIcon fontSize='large'sx={{color:'white'}}/>
          </IconButton>
          </Box>
      </ToolBar>
    </AppBar>
  )
}

export default Header