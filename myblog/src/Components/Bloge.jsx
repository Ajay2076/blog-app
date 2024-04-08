
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Bloge = () => {
    
  return (
    <div style={{ paddingTop:"80px"}}>
        <Typography variant='h2'>
            <h5>BLOG FORM</h5>
        </Typography>
        <TextField label='Blog Name' variant='outlined' /><br/><br/>
        <TextField label='Description' variant='outlined'  /><br/><br/>
        <TextField label='Author Name' variant='outlined' /><br/><br/>
        
        <Button variant='contained'color='info' >submit</Button>
    </div>
  )
}

export default Bloge
	
