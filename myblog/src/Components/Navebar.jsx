import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
    <div>
        <AppBar color='warning'>
        <Toolbar>
            <Typography variant='h3' > BLOG FORM</Typography>&nbsp;&nbsp;
            <Button variant='contained' color='success'style={{marginLeft:"750px"}}><Link to={'/h'} style={{textDecoration:'none',color:'white'}}> Home</Link></Button>&nbsp;&nbsp;
            <Button variant='contained' color='secondary'><Link to={'/ho'} style={{textDecoration:'none',color:'white'}}>Add Blog</Link></Button>&nbsp;&nbsp;
         

        </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navebar