import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper, Typography, Button, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavigateNext from '@mui/icons-material/NavigateNext';
import { OrderTable } from '../components';
import theme from "../Theme";


const useStyles = makeStyles(() => ({
    root: {
        height: "100%",
        color: theme.palette.black.main,
        padding: 15
    },
    divider: {
        backgroundColor: theme.palette.white.main,
        color: theme.palette.black.main,
        border: "none", height: 2, margin: "10px 0",
    }
}));



export default function Order() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Paper elevation={6} sx={{ minHeight: "47.45vh", borderRadius: 5, p: 5 }}>
                <Typography sx={{ mb: 4, color: "black.main" }} align="center" variant="h4" fontWeight={500}>
                    My Orders
                </Typography>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" my={3}>
                    <Button component={Link} to="menu" variant="contained" color="secondary" size='large'>
                        <Typography variant="h6">
                        Order Food    
                        </Typography> 
                        <NavigateNext />
                    </Button>
                </Box>
                <Divider />
                <OrderTable />
                <Typography align="center" my={3} sx={{ color: "black.main" }}>
                    It seems you don't have any orders.
                </Typography>
                <Divider />

            </Paper>
        </Box>
    )
}
