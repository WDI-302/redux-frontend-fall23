import React from 'react'
import { Container, Box, Typography } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { loginTest } from '../redux/userSlice'


const Home = () => {
  // make a Redux store and userSlice
  // shouild be able to display user's name below
  // Hello World -> Hello Firstname - Hello Paul

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  // testing the backend
  // React.useEffect(() => {
  //   dispatch(loginTest())
  // }, [])

  
  
  return (
    <Container maxWidth='lg'>
        <Box >
            <Typography variant='h1'>Hello {user.firstname}</Typography>
        </Box>
    </Container>
  )
}

export default Home