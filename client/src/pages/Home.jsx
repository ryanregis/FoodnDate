import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import theme from '../Theme';

const useStyles = makeStyles(() => ({
    viewScheds: {
        borderRadius: '20px',
        border: '5px solid #9B9DA4',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        gap:'10px',
        fontSize: 'clamp(1.5rem, 1vw, 1.5rem)',
    },
    buttonOrder: {
        borderRadius: '20px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white.main,
        fontSize: 'clamp(1rem, 1vw, 1.5rem)',
    },
    buttonAppoint: {
        borderRadius: '20px',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.white.main,
        fontSize: 'clamp(1rem, 1vw, 1.5rem)',
    }
}))
export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Grid container sx={{bgcolor:'white.main'}}>
                <Grid p={3} item sm={12} xs={12}>
                    <Typography variant='h4'>Welcome, @user!</Typography>
                </Grid>
                <Grid p={3} container  spacing={2}>
                    <Grid item sm={4}>
                        <Box p={1} variant='contained' className={classes.viewScheds}>
                            You have 0 food orders. 
                            <Link to='/'>
                                    <Typography p={1} className={classes.buttonOrder}>
                                        View My Order
                                    </Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item sm={8}>
                        <Box p={1} variant='contained' className={classes.viewScheds}>
                            You have no upcoming virtual date.. 
                            <Link to='/appointment'>
                                    <Typography p={1} className={classes.buttonAppoint}>
                                        View My Appointments
                                    </Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item sm={12}>
                    <Typography align='center' variant='h3'>FEATURED PROMOS</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
