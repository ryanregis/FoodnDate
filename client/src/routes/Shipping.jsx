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

function Shipping() {
    const classes = useStyles();
    const [defAddressChoice, setDefAddressChoice] = React.useState(null);
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{ mb: 5 }}>
                    <OrderBreadcrumbs current="shipping" />
                    <Paper elevation={12} sx={{ minHeight: "60vh", mx: 5, borderRadius: 5, p: 5 }}>
                        <Typography sx={{ mb: 2, color: "black.main" }} variant="h4" align="center" fontWeight={700}>
                            Shipping
                        </Typography>
                        <Box sx={{ border: "2px solid", borderColor: "secondary.main", height: "clamp(300px,60vh,800px)" }}>
                            <Typography>
                                Use default address?
                            </Typography>
                            <RadioGroup row value={defAddressChoice}
                                onChange={(e) => setDefAddressChoice(e.target.value)}>
                                <FormControlLabel value="yes" control={<Radio color="secondary" required />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio color="secondary" required />} label="No" />
                            </RadioGroup>
                        </Box>
                        <Box mt={5} width="100%" display="flex" justifyContent="space-between" alignItems="center">
                            <Button component={Link} to="/order/schedule" color="secondary" variant="contained" size='large'>
                                <NavigateBeforeIcon fontSize="large" />
                                <Typography variant="h6">Set Schedule/Delivery</Typography>
                            </Button>
                            <Button component={Link} to="/order/payment" color="secondary" variant="contained" size='large'>
                                <Typography variant="h6">Payment</Typography>
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

export default Shipping;