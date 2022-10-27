import React from 'react'
import Drawer from '@mui/material/Drawer'
import NestedList from './NestedList/NestedList'
import Box from '@mui/material/Box'
type Props = {
  open:boolean
}

const SideBar = ({open}: Props) => {
  
  return (
    <Drawer variant='persistent' anchor='left' open={open} >
      <Box height={56}></Box>
      <NestedList open={open}/>
    </Drawer>
  )
    }

export default SideBar