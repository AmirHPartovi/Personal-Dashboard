
import { Grid ,} from '@mui/material'
import ContactsHeader from '../components/Contacts/ContactsHeader';
import TableContacts from '../components/Contacts/ContactsTable';
import ContactsSearchArea from '../components/Contacts/ContactsSearchArea';
import { useState } from 'react';
type props={

}
const Contacts = (props:props) => {
   const [search,setSearch]=useState('')
   const [searchToggle,setSearchToggle]=useState('none')
   const[filter , setFilter] = useState('')
  return (
    <Grid paddingTop={8}>
        <ContactsHeader setSearchToggle={setSearchToggle} searchToggle={searchToggle} setSearch={setSearch} filter={filter} setFilter={setFilter}/>
        <ContactsSearchArea searchToggle={searchToggle} setSearch={setSearch} search={search}/>
        <TableContacts setSearch={setSearch} search={search} filter={filter}/>
        
    </Grid>
  )
}

export default Contacts