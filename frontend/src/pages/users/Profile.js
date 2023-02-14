import React from 'react';
import {  useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { useForm } from "react-hook-form"
// import { getUserDetails } from '../../actions/userActions'
import { Link } from 'react-router-dom';

import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import '../../styles/users/profile.scss'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))


function ProfileScreen() {

    const userInfo = useSelector(state => state.userLogin.userInfo)

    return (
        <div className="container">
            <div className='title-profile'>
                <h3>Welcome to your dashboard {userInfo.name}</h3>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={2} sm={4} md={4}>
                        <Link to="/profile/order-history">
                            <Item>
                                <div>
                                    <div>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                            </svg> */}
                                    </div>
                                    <div>
                                        Your commands
                                    </div>
                                </div>
                            </Item>
                        </Link>
                    </Grid>
                    <Grid xs={2} sm={4} md={4}>
                        <Link to="/profile/security">
                            <Item>
                                <div className='contain'>
                                    <div className='svg-section'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                    <div className='text-section'>
                                        Login & security
                                    </div>
                                </div>
                            </Item>
                        </Link>
                    </Grid>
                    <Grid xs={2} sm={4} md={4}>
                        <Link to="/">
                            <Item></Item>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ProfileScreen