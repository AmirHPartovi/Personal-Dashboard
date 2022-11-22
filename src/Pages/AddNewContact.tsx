import React, { useEffect } from 'react'

import { Grid , Button , TextField ,Typography,Checkbox} from '@mui/material'
import { Favorite , FavoriteBorder} from '@mui/icons-material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch,useSelector} from 'react-redux'
import { addContact ,updateContact} from '../Redux/Slice/ContactsSlice'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useNavigate, useParams} from "react-router-dom";
type props ={

}
const AddNewContact = (props:props) => {
    const [state, setState] = useState('ADD')
    const contacts = useSelector((state:any) => state.contacts)
    const {ContactId} = useParams()
    const navigate = useNavigate()
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
  const handleFormChangeFavorite = (favorite:boolean) =>{
    
    setForm({...form,favorite:(!favorite)})
  }
  const handleFormSubmit = (e:any) =>{
    e.preventDefault()
    if(state==='UPDATE'){
        dispatch(updateContact(form))
        setState('ADD')
        
    }else{
        dispatch(addContact(form))
       
    }
    clearForm()
    navigate("/")
  }
  const clearForm = () =>{
    setForm(emptyForm)
  }
  useEffect(()=>{
    return () =>{
      clearForm()
    } 
  },[])
  useEffect(() => {
    const c = contacts.filter((contact:any) => contact.id === Number(ContactId))[0]
    if (c) {
        setForm(c)
        setState('UPDATE')
    }
}, [])
  return (
    <Grid container alignItems={'center'} direction={'column'}>
      <Grid container direction={'row'} justifyContent={'space-around'} mt={8}>
        <Grid>
          <Typography variant={'h4'} sx={{m:2}}>
            {state} CONTACT
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
            <Checkbox onClick={()=>handleFormChangeFavorite(form.favorite)} name='favorite' value={form.favorite}  icon={<FavoriteBorder fontSize={'large'} />}  checkedIcon={<Favorite fontSize={'large'} />} color="error"  sx={{m:2}} />
        </Grid>
        <Grid container justifyContent={'flex-end'}>
        <Button type='submit' variant='contained' color='success'>
          <AddIcon/>{state}
        </Button>
        </Grid>
       </form>
      </Grid>
    </Grid>
  )
}

export default AddNewContact