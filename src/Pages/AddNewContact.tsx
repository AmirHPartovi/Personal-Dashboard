import React, { useEffect } from 'react'

import { Grid , Button , TextField ,Typography,Checkbox} from '@mui/material'
import { Favorite , FavoriteBorder} from '@mui/icons-material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux'
import { addContact } from '../Redux/Slice/ContactsSlice'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
type props ={

}
const AddNewContact = (props:props) => {

  const emptyForm={
    id:Math.floor(Math.random()*1000) ,
     name:'' ,
     age:0 , 
     email:'' ,
    number:'' ,
    favorite:false ,
    country:''
  }

  const[form,setForm]=useState(emptyForm)
  const dispatch = useDispatch()

  const handleFormChange = (e:any) =>{
    
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleFormSubmit = (e:any) =>{
    e.preventDefault()
    dispatch(addContact(form))
    clearForm()
  }
  const clearForm = () =>{
    setForm(emptyForm)
  }
  useEffect(()=>{
    return () =>{
      clearForm()
    } 
  },[])
  return (
    <Grid container alignItems={'center'} direction={'column'}>
      <Grid container direction={'row'} justifyContent={'space-around'} mt={8}>
        <Grid>
          <Typography variant={'h4'} sx={{m:2}}>
            ADD NEW CONTACT
          </Typography>
        </Grid>
        <Grid>
          <Link to={'/'}>
            <Button variant='outlined' sx={{m:2}}><ArrowBackIosNewIcon/></Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container justifyContent={'space-around'} spacing={2} m={4}>
        <form  onSubmit={handleFormSubmit}>
        <TextField onChange={handleFormChange} type={'text'} value={form.name} name='name' label={'Name'} sx={{m:2}} ></TextField>
        <TextField onChange={handleFormChange} type={'number'} value={form.number} name='number' label={'Number'}sx={{m:2}}></TextField>
        <TextField onChange={handleFormChange} type={'email'} value={form.email} name='email' label={'Email'}sx={{m:2}} ></TextField>
        <TextField onChange={handleFormChange} type={'number'} value={form.age} name='age' label={'Age'}sx={{m:2}}></TextField>
        <TextField onChange={handleFormChange} type={'text'} value={form.country} name='country' label={'Country'} sx={{m:2}} ></TextField>
        <Grid item container direction={'row'} justifyContent={'flex-start'} >
            <Typography variant='h6' sx={{m:2}}>Favorite:</Typography>
            <Checkbox onChange={handleFormChange} name='favorite' value={form.favorite}  icon={<FavoriteBorder fontSize={'large'} />} checked={form.favorite} checkedIcon={<Favorite fontSize={'large'} />} color="error"  sx={{m:2}} />
        </Grid>
        <Grid container justifyContent={'flex-end'}>
        <Button type='submit' variant='contained' color='success'>
          <AddIcon/>ADD CONTACT
        </Button>
        </Grid>
       </form>
      </Grid>
    </Grid>
  )
}

export default AddNewContact