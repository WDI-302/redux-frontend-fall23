import React from 'react'
import { Container, Box, Typography, Link } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { loginTest } from '../redux/userSlice'
import { authCheck } from '../redux/authSlice'


const Home = () => {
  // make a Redux store and userSlice
  // shouild be able to display user's name below
  // Hello World -> Hello Firstname - Hello Paul

  const user = useSelector(state => state.user)
  const auth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()

  // testing the backend
  // React.useEffect(() => {
  //   dispatch(loginTest())
  // }, [])

  React.useEffect( () => {
    dispatch(authCheck())
  },[auth])

  
  
  return (
    <Container maxWidth='lg'>
        <Box >
            <Typography variant='h3'>{
              auth ? 
                <>Hello {user.firstname}</>
             :

                <>
                {auth}
                Please <Link href='/login' variant="h3">Login</Link> 
                or <Link href='/register'>Register</Link></>
            }</Typography>
        </Box>
    </Container>
  )
}

export default Home