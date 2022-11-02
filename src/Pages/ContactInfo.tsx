import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type Props = {}

const ContactInfo = (props: Props) => {
  return (
    <Grid container direction={'column'} alignItems={'center'}>
         <Grid container direction={'row'} justifyContent={'space-around'} mt={8}>
        <Grid>
          <Typography variant={'h4'} sx={{m:2}}>
            ADD NEW CONTACT
          </Typography>
        </Grid>
        <Grid>
          <Link to={"/"}>
            <Button variant='outlined' sx={{m:2}}><ArrowBackIosNewIcon/></Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactInfo