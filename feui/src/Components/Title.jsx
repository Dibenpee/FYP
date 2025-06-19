import { Box, IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'

const MainTitle = (props) => {
    
const weight = props.title;
    return (

    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>

        <Typography variant={weight} fontWeight="bold">VitaLife</Typography>  
      </Box>
  )
}

export default MainTitle;

