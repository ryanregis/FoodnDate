import React from 'react'
import { Link } from 'react-router-dom';

import {
    Paper, Box, Typography, Chip, Grid, Divider, Button,
    ImageList, ImageListItem, ImageListItemBar, CardMedia
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import theme from '../Theme';
import { OrderDetails, OrderBreadcrumbs } from "../components";


const useStyles = makeStyles(() => ({
    mainDivider: {
        backgroundColor: theme.palette.secondary.main,
        border: "none", height: 2, margin: "10px 0",
    }
}));

function Payment() {
    const classes = useStyles();

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{ mb: 5 }}>
                    <OrderBreadcrumbs current="payment" />
                    <Paper elevation={12} sx={{ minHeight: "60vh", mx: 5, borderRadius: 5, p: 5 }}>
                        <Typography sx={{ mb: 2, color: "black.main" }} variant="h4" align="center" fontWeight={700}>
                            Payment
                        </Typography>
                        <Box sx={{ border: "2px solid", borderColor: "secondary.main", height: "clamp(300px,60vh,800px)" }}>
                            <a rel='nofollow' href='https://www.qr-code-generator.com' border='0' style={{ cursor: "default" }}></a><img src='https://chart.googleapis.com/chart?cht=qr&chl=FoodnDate%20Mock%20QR%20Code.%0A%0AThis%20is%20not%20a%20real%20QR%20Code.&chs=180x180&choe=UTF-8&chld=L|2' alt='' />
                        </Box>
                        <Box mt={5} width="100%" display="flex" justifyContent="center">
                            <Button  component={Link} to="/order/finish" color="secondary" variant="contained" size='large'>
                                <Typography variant="h6">View Completed Order</Typography>
                            </Button>
                        </Box>
                        <Box mt={-6.5} width="100%" display="flex" justifyContent="flex-start" alignItems="center">
                            <Button component={Link} to="/order/shipping" color="secondary" variant="contained" size='large'>
                                <NavigateBeforeIcon fontSize="large" />
                                <Typography variant="h6">Shipping</Typography>
                            </Button>

                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <OrderDetails />
                </Grid>
            </Grid>
        </Box>

    )
}

export default Payment;
