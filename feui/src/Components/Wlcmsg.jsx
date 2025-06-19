import { Box, Typography } from '@mui/material'

const Wlcmsg = (props) => {
  return (
     <Box textAlign="center" mt={5}>
      <Typography variant="h5" fontWeight="bold">Welcome Back, {props.user}.</Typography>
    </Box>
  )
}

export default Wlcmsg