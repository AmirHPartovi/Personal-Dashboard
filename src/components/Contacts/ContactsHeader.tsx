import {Grid, Typography,Button,FormControl,InputLabel,Select,MenuItem } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
type props={
    searchToggle:string,
    setSearchToggle: React.Dispatch<React.SetStateAction<string>>,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    filter:any,
    setFilter: React.Dispatch<React.SetStateAction<any>>,
    
}
const HomeHeader = ({searchToggle,setSearchToggle,setSearch,filter,setFilter}:props) => {
const handleShowSearchArea = () =>{
  if(searchToggle==='none'){
    setSearchToggle('flex')
  }else{
    setSearchToggle('none')
    setSearch('')
  }

}
const handleFilter= (e:any) =>{
  setFilter(e)
}


  return (
    <Grid container justifyContent={'space-around'} mt={2}>
        <Grid>
        <Typography variant='h3'>Contact</Typography>
        </Grid>
        <Grid>
          <Button variant='outlined' onClick={handleShowSearchArea}><SearchIcon/>SEARCH</Button>
          <Link to={'/AddNewContact'}>
          <Button variant={'outlined'} sx={{borderRadius:1, margin:2 ,textDecoration:'none'}}>
             <AddIcon/><Typography>ADD CONTACT</Typography>
          </Button>
          </Link>
          <FormControl sx={{width:140 ,margin:2}}>
         <InputLabel >Filter Favorite</InputLabel>
          <Select>
            <MenuItem onClick={()=>handleFilter(undefined)} >All Contacts</MenuItem>
            <MenuItem onClick={()=>handleFilter(false)}>Favorite Contacts</MenuItem>
            <MenuItem onClick={()=>handleFilter(true)} >UnFavorite Contacts</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <span style={{height:'2px',width:'100%'}}></span>
    </Grid>
  )
}

export default HomeHeader