import React, {useContext} from 'react'
import { Link,  useNavigate } from 'react-router-dom';

import { OrderContext, ACTIONS } from '../context/OrderContext';

import {
    Paper, Box, Typography, Chip, Grid, Divider, Button,
    RadioGroup, Radio, FormControlLabel
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
    const navigate = useNavigate();
    const classes = useStyles();
    const [payMethod, setPayMethod] = React.useState(null);
    const {state, dispatch} = useContext(OrderContext);
    const { userName, userAddress, forADate, sOEmail, sOName, sOAddress, paymentMethod, schedule, items } = state;
    const handleNext = () => {
        if(payMethod === null || payMethod === "") swal("Please select payment method.", "", "warning");
        else {
            dispatch({type: ACTIONS.changePayMethod, payload: payMethod});
            localStorage.setItem("userDetails", JSON.stringify({ userName, userAddress, forADate, sOName, sOAddress, paymentMethod: payMethod, schedule}));
            navigate("/order/review");
        }
    };
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{ mb: 5 }}>
                    <OrderBreadcrumbs current="payment" />
                    <Paper elevation={12} sx={{ minHeight: "60vh", mx: 5, borderRadius: 5, p: 5 }}>
                        <Typography sx={{ mb: 2, color: "black.main" }} variant="h4" align="center" fontWeight={700}>
                            Payment
                        </Typography>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ border: "2px solid", borderColor: "secondary.main", height: "clamp(300px,60vh,800px)" }}>
                            <Box width="100%" justifyContent="center" flexDirection="column" display="flex" alignItems="center" mb={2} >
                                <Typography variant="h5" sx={{ mb: 5 }} align="center">
                                    Your Total Payment is: {"\"subtotal+200\""}
                                    <Typography variant="body2">The delivery fee is fixed at  &#8369; 200.</Typography>
                                </Typography>
                                <Typography variant="h6" sx={{mb: 3}}>
                                    Choose your payment method below.
                                    <Typography align="center" fontSize={14}>Other payment methods coming soon...</Typography>
                                </Typography>
                                <RadioGroup row value={payMethod}
                                    onChange={(e) => setPayMethod(e.target.value)}>
                                    <FormControlLabel value="COD" control={<Radio color="secondary" required />} label={
                                        <Typography variant="body2" fontWeight={700}>Cash-On-Delivery (COD)</Typography>
                                    } />
                                    <FormControlLabel value="EWALLET" control={<Radio color="secondary" required />} label={
                                        <Typography variant="body2" fontWeight={700}>E-Wallet (GCash)</Typography>
                                    } />
                                </RadioGroup>
                            </Box>
                           { payMethod === "EWALLET" &&
                           <Box border={5} borderColor="info.main" p={3} width="40%"
                           display="flex" flexDirection="column" alignItems="center">
                               <Typography align="center" mb={2}>
                                   Scan the QR Code below to pay by e-wallet.<br />(Only GCash)
                               </Typography>
                               <>
                               <a rel='nofollow' href='https://www.qr-code-generator.com' border='0' style={{ cursor: "default" }}></a><img src='https://chart.googleapis.com/chart?cht=qr&chl=FoodnDate%20Mock%20QR%20Code.%0A%0AThis%20is%20not%20a%20real%20QR%20Code.&chs=180x180&choe=UTF-8&chld=L|2' alt='' />
                               </>
                            </Box>
                           }
                        </Box>

                        <Box mt={5} width="100%" display="flex" justifyContent="space-between" alignItems="center">
                            <Button component={Link} to="/order/shipping" color="secondary" variant="contained" size='large'>
                                <NavigateBeforeIcon fontSize="large" />
                                <Typography variant="h6">Shipping</Typography>
                            </Button>
                            <Button onClick={handleNext} color="secondary" variant="contained" size='large'>
                                <Typography variant="h6">Review Completed Order</Typography>
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

export default Payment;
