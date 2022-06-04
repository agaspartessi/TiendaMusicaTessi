import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function Spinner() {
    return (
        <Box className='' sx={{ display: 'flex' }}>
            <p className=''>Cargando por favor espere...</p>
            <CircularProgress className=''/>
        </Box>
    );
}

export default Spinner