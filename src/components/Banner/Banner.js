import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './styles.css';

const Banner = () => {
  return (
    <Box className='bannerWrapper'>
        <Box className='pictureWrapper'></Box>
      <Box className='contentWrapper'>
        <Typography variant='h5' className='typo'>Our motto</Typography>
        <Typography variant='h2' className='typo'>Help animals</Typography>
        <Typography variant='h6' className='typo'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
          <Box className='buttonBox'>
            <Button 
                size='large' 
                variant='contained'
                className='buttonClass'
                sx={{ background: '#00adb5', color: '#222', fontWeight: '700', '&:hover': {background: '#008ea0'} }}
                >
                  DONATE
            </Button>
          </Box>
      </Box>
    </Box>
  )
}

export default Banner;
