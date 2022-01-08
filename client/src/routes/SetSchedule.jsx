import React from 'react'
import { Link } from 'react-router-dom';

import {
    Paper, Box, Typography, Chip, Grid, Divider, Button,
    TextField, Radio, RadioGroup, FormControlLabel,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import theme from '../Theme';
import { OrderDetails, OrderBreadcrumbs } from "../components";
import { foodMenu } from '../constants';

const useStyles = makeStyles(() => ({
    mainDivider: {
        backgroundColor: theme.palette.secondary.main,
        border: "none", height: 2, margin: "10px 0",
    }
}));

function SetSchedule() {
    const classes = useStyles();

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{ mb: 5 }}>
                    <OrderBreadcrumbs current="setSchedule" />
                    <Paper elevation={12} sx={{ minHeight: "60vh", mx: 5, borderRadius: 5, p: 5 }}>
                        <Typography sx={{ mb: 2, color: "black.main" }} variant="h4" align="center" fontWeight={700}>
                            Set Schedule/Delivery
                        </Typography>

                        <Box sx={{ border: "2px solid", borderColor: "secondary.main", height: "clamp(300px,60vh,800px)"}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography>
                                        Are you taking this order for a date?
                                    </Typography>
                                    <RadioGroup>
                                        <FormControlLabel>
                                            
                                        </FormControlLabel>
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box mt={5} width="100%" display="flex" justifyContent="space-between" alignItems="center">
                            <Button component={Link} to="/order/menu" color="secondary" variant="contained" size='large'>
                                <NavigateBeforeIcon fontSize="large" />
                                <Typography variant="h6">Order Food</Typography>
                            </Button>
                            <Button component={Link} to="/order/shipping" color="secondary" variant="contained" size='large'>
                                <Typography variant="h6">Shipping</Typography>
                                <NavigateNextIcon fontSize="large" />
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

export default SetSchedule;