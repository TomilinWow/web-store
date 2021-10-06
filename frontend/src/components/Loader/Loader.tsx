import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box sx={{ display: 'flex' ,alignItems: 'center', justifyContent: 'center', height: '90%'}}>
      <CircularProgress style={{'color': '#00b8eb'}}/>
    </Box>
  );
}