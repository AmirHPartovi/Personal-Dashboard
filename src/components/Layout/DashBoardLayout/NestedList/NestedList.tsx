import * as React from 'react';
import {Link} from 'react-router-dom'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ContactsIcon from '@mui/icons-material/Contacts';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

type Props = {
  open:boolean
}

 const NestedList =({open}:Props) => {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          List Items
        </ListSubheader>
      }
    >
      <Link to={'/'}>
      <ListItemButton>
        <ListItemIcon>
          <ContactsIcon/>
        </ListItemIcon>
        <ListItemText  primary="Contacts" />
      </ListItemButton>
      </Link>
      <Link to={'/todo'}>
      <ListItemButton>
        <ListItemIcon>
          <CheckBoxIcon/>
        </ListItemIcon>
        <ListItemText primary="Todo" />
      </ListItemButton>
      </Link>

      
    </List>
  );
}

export default NestedList


const sidebaritem =[
  {label:'sent mail',
  icon:<SendIcon/>  
  },
  {label:'Draft',
  icon:<SendIcon/>  
  },
  {label:'Inbox',
  icon:<SendIcon/>  
  },
  {label:'sent mail',
  icon:<SendIcon/>  
  },
  {label:'sent mail',
  icon:<SendIcon/>  
  },
]