import { TextField , Grid } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
type props={
    search:string,
    setSearch:React.Dispatch<React.SetStateAction<string>>,
    searchToggle:string,
}
const ContactsSearchArea = ({setSearch,search,searchToggle}:props) => {
    const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
        setSearch(e.target.value)

    }
  return (
    <Grid sx={{display:searchToggle}} container justifyContent={'center'}>
        <Grid container justifyContent={'center'} width={500}>
            <TextField name='search'  label={'Search'} onChange={handleSearch}></TextField>
        </Grid>
    </Grid>
  )
}

export default ContactsSearchArea