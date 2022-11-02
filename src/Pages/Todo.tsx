import React, { useEffect } from 'react'
import {addTodo, deleteTodo, updateTodo} from '../Redux/Slice/TodoSlice'
import { Grid , Button , TextField ,Typography,Checkbox} from '@mui/material'
import { Favorite , FavoriteBorder} from '@mui/icons-material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch,useSelector} from 'react-redux'

import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type Props = {}

const Todo = (props: Props) => {
const [state,setState] = useState('Add')
const [form,setForm]=useState('')
const todos = useSelector((state:any)=>state.todo)
const dispatch =useDispatch()


const handleChangeTodo = (e:any) =>{
setForm(e.target.value)
}
const handleSubmitTodo =()=>{

}
  return (
    <Grid container alignItems={'center'} direction={'column'}>
    <Grid container direction={'row'} justifyContent={'space-around'} mt={10}>
      <Grid>
        <Typography variant={'h4'} sx={{m:2}}>
           TODO
        </Typography>
      </Grid>
      <Grid>
        <form onSubmit={handleSubmitTodo}>
        <TextField onChange={handleChangeTodo} variant='outlined' label={'TODO'}sx={{m:2}}></TextField>
        <Button variant={'contained'} color={'success'}sx={{m:2}}>{state}</Button>
        </form>
      </Grid>
      <Grid>
        <Link to={'/'}>
          <Button type={'submit'} variant='outlined' sx={{m:2}}><ArrowBackIosNewIcon/></Button>
        </Link>
      </Grid>
    </Grid>
    </Grid>
  )
}

export default Todo