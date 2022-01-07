import React from 'react'
import { Link } from 'react-router-dom';

import { Paper, Box, Typography, Grid, Divider, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

import theme from '../Theme';
import { OrderDetails, OrderBreadcrumbs } from "../components";

const useStyles = makeStyles(() => ({
    orderFood: {
        minHeight: "60vh",
        color: theme.palette.black.main,
    },
}));

function OrderFood() {
    const classes = useStyles();

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} className={classes.orderFood}>
                    <OrderBreadcrumbs current="orderFood" />
                    <Paper elevation={12} sx={{ mx: 5, borderRadius: 5, p: 5 }}>
                        <Typography sx={{ mb: 2 }} variant="h6">
                            Select the food you want to order.
                        </Typography>
                        <Divider />
                        {

                        }
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <OrderDetails />
                </Grid>
            </Grid>
        </Box>

    )
}

export default OrderFood;