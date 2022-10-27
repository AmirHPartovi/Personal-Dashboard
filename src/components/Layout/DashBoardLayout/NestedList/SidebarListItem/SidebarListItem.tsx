import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';

type Props = {
    label:string;
    icon:React.ReactNode;

}

const SidebarListItem = (props: Props) => {
  return (
    <ListItemButton>
    <ListItemIcon>
      <SendIcon />
    </ListItemIcon>
    <ListItemText primary="Sent mail" />
  </ListItemButton>
  )
}

export default SidebarListItem