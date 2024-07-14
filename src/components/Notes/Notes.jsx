import React from 'react';
import Sidenav from "../Sidenav";
import { Typography } from '@mui/material';

const Notes = () => {
  return (
    <>
     <Sidenav />
     <div>
        <Typography variant='h3' align='center'> Notes </Typography>
     </div>
    </>
  );
};

export default Notes;