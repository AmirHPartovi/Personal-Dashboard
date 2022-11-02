import React, { useEffect } from 'react'
import {addTodo, deleteTodo, updateTodo , checkTodo} from '../Redux/Slice/TodoSlice'
import { Grid , Button , TextField ,Typography,Checkbox} from '@mui/material'
import { Favorite , FavoriteBorder} from '@mui/icons-material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch,useSelector} from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SyncIcon from '@mui/icons-material/Sync';
import {FormControl,InputLabel,Select,MenuItem} from '@mui/material'

type Props = {}

const Todo = (props: Props) => {
const [state,setState] = useState('ADD')
const [form,setForm]=useState('')
const [filter,setFilter]=useState('')
const [search,setSearch]=useState('')
const todos = useSelector((state:any)=>state.todo)
const dispatch =useDispatch()


const handleChangeTodo = (e:any) =>{
    setForm(e.target.value)
}
const handleSubmitTodo =(e:any)=>{
    e.preventDefault()
    if(state==='UPDATE'){
        dispatch(updateTodo(form))
        setState('ADD')
        
    }else{dispatch(addTodo(form))
       
    }
}
const handleDeleteTodo = (id:number) =>{
    dispatch(deleteTodo(id))
}
const handleUpdateTodo = (todo:any) =>{
    setState('UPDATE')
    setForm(todo.title)
}
const handleTodo = (id:number) =>{
    dispatch(checkTodo(id))
}
const handleSearchTodo = (e:any)=>{
    setSearch(e.target.value)
}
const handleFilter = (e:any) =>{
    setFilter(e)
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
        <TextField variant='outlined' onChange={handleSearchTodo} label={'Search'} ></TextField>
      </Grid>
      <Grid>
      <FormControl sx={{width:140 ,margin:2}}>
         <InputLabel >Filter Favorite</InputLabel>
          <Select>
            <MenuItem onClick={()=>handleFilter(undefined)} >All TODOs</MenuItem>
            <MenuItem onClick={()=>handleFilter(false)}>DONE TODOs</MenuItem>
            <MenuItem onClick={()=>handleFilter(true)} >NOT DONE TODOs</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid>
        <form onSubmit={handleSubmitTodo}>
        <TextField onChange={handleChangeTodo} variant='outlined' name='title' value={form} label={`${state} TODO`}sx={{m:2}}></TextField>
        <Button type={'submit'} variant={'contained'} color={'success'}sx={{m:2}}>{state}</Button>
        </form>
      </Grid>
      
    </Grid>
    <Grid>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="left">TODO</TableCell>
            <TableCell align="left">TITLE</TableCell>
            <TableCell align="left">UPDATE</TableCell>
            <TableCell align="left">DELETE</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        
        {todos.filter( (todo:any) => todo.status !== filter).filter( (todo:any) => todo.title.toUpperCase().includes(search.toUpperCase())).map((todo:any) => (
            <TableRow
              key={todo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Checkbox onClick={()=>handleTodo(todo.id)} color={'secondary'}  checked={todo.status} />
              </TableCell>
                
              <TableCell align="left">{todo.title}</TableCell>
              
              
              <TableCell align="left">
              
                <Button variant='outlined' onClick={()=>handleUpdateTodo(todo)}>
                   <SyncIcon/> UPDATE
                </Button>
                
            </TableCell>
            <TableCell>
            <Button variant='outlined' color='error' onClick={()=>handleDeleteTodo(todo.id)}>
                    <DeleteIcon/> DELETE
                </Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
  )
}

export default Todo