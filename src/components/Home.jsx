import React from 'react'
import { Container, Box, Typography } from '@mui/material'

// make a Redux store and userSlice
// shouild be able to display user's name below
// Hello World -> Hello Firstname - Hello Paul

const Home = () => {
  return (
    <Container maxWidth='lg'>
        <Box >
            <Typography variant='h1'>Hello World</Typography>
        </Box>
    </Container>
  )
}

export default Home