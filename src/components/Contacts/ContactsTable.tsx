import Table from '@mui/material/Table';
import { useSelector , useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { deleteContact, changeFavorite } from '../../Redux/Slice/ContactsSlice'
import { FavoriteBorder , Favorite } from '@mui/icons-material'

type props={
    setSearch:React.Dispatch<React.SetStateAction<string>>,
    search:string,
    filter:any,
    

}
const ContactsTable=({ setSearch,search,filter}:props)=> {

    const contacts = useSelector((state:any) => state.contacts)
    
        const dispatch = useDispatch()
        const handleDelete = (id:number) => {
            dispatch(deleteContact(id))
        }
        const handleFavorite = (id:number) => {
            dispatch(changeFavorite(id))
        }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">AVATAR</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">NUMBER</TableCell>
            <TableCell align="left">EMAIL</TableCell>
            <TableCell align="left">AGE</TableCell>
            <TableCell align="left">COUNTRY</TableCell>
            <TableCell align="left">FAVORITEI</TableCell>
            <TableCell align="left">INFO</TableCell>
            <TableCell align="left">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
        {contacts.filter( (contact:any) => contact.favorite !== filter).filter( (contact:any) => contact.name.toUpperCase().includes(search.toUpperCase())).map((contact:any) => (
            <TableRow
              key={contact.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {contact.id}
              </TableCell>
                <TableCell align="left">
                    <Grid container borderRadius={'60%'} border={1} width={65} height={65} justifyContent={'center'} alignItems={'center'}>
                        <img src={`https://avatars.dicebear.com/api/micah/:${contact.id}.svg`} width={50}></img>
                    </Grid>
                </TableCell>
              <TableCell align="left">{contact.name}</TableCell>
              <TableCell align="left">{contact.number}</TableCell>
              <TableCell align="left">{contact.email}</TableCell>
              <TableCell align="left">{contact.age}</TableCell>
              <TableCell align="left">{contact.country}</TableCell>
              <TableCell align="left">
                <Checkbox onClick={()=>handleFavorite(contact.id)} color='error' icon={<FavoriteBorder />} checkedIcon={<Favorite/>} checked={contact.favorite} />
              </TableCell>
              <TableCell align="left">
              <Link to={`/updateContact/${contact.id}`}>
                <Button variant='outlined'>
                   <InfoIcon/> INFO
                </Button>
                </Link>
            </TableCell>
            <TableCell>
            <Button variant='outlined' color='error' onClick={()=>handleDelete(contact.id)}>
                    <DeleteIcon/> DELETE
                </Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContactsTable