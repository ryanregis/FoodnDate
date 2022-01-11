import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { ACTIONS, OrderContext } from '../context/OrderContext';

import {
    Paper, Box, Typography, Grid, Button,
    RadioGroup, Radio, FormControlLabel, TextField
} from "@mui/material";

import { makeStyles } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import theme from '../Theme';
import { OrderDetails, OrderBreadcrumbs } from "../components";

import swal from "sweetalert";


function Shipping() {
    const navigate = useNavigate();
    const [defAddressChoice, setDefAddressChoice] = React.useState(null);
    const [signifAddress, setSignifAddress] = React.useState("Not available");
    const [otherAddress, setOtherAddress] = React.useState("");
    const { state, dispatch } = useContext(OrderContext);

    const handleNext = () => {
        if (defAddressChoice === "yes") {
            if (signifAddress === "") swal("Please input all fields.", "", "warning");
            else {
                dispatch({ type: ACTIONS.changeSOAddress, payload: signifAddress });
                navigate("/order/payment");
            }
        } else if (defAddressChoice === "no") {
            if (otherAddress === "" || signifAddress === "") swal("Please input all fields.", "", "warning");
            else {
                dispatch({ type: ACTIONS.changeSOAddress, payload: signifAddress });
                dispatch({ type: ACTIONS.changeUAddress, payload: otherAddress });
                navigate("/order/payment");
            }
        } else {
            swal("Please input all fields.", "", "warning");
        }
    }
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{ mb: 5 }}>
                    <OrderBreadcrumbs current="shipping" />
                    <Paper elevation={12} sx={{ minHeight: "60vh", mx: 5, borderRadius: 5, p: 5 }}>
                        <Typography sx={{ mb: 2, color: "black.main" }} variant="h4" align="center" fontWeight={700}>
                            Shipping
                        </Typography>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ border: "2px solid", borderColor: "secondary.main", height: "clamp(300px,60vh,800px)" }}>
                            <Box width="50%" justifyContent="space-between" display="flex" alignItems="center" gap={2} >
                                <Typography variant="h6">
                                    Use registered address?
                                </Typography>
                                <RadioGroup row value={defAddressChoice}
                                    onChange={(e) => setDefAddressChoice(e.target.value)}>
                                    <FormControlLabel value="yes" control={<Radio color="secondary" size="large" required />} label={
                                        <Typography variant="h6">Yes</Typography>
                                    } />
                                    <FormControlLabel value="no" control={<Radio color="secondary" size="large" required />} label={
                                        <Typography variant="h6">No</Typography>
                                    } />
                                </RadioGroup>
                            </Box>
                            {defAddressChoice === "no" &&
                                <Box mt={5} width="50%">
                                    <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="h6">
                                            Input new delivery address:
                                        </Typography>
                                        <TextField
                                            value={otherAddress}
                                            onChange={e => setOtherAddress(e.target.value)}
                                            variant="outlined"
                                            required color="secondary"
                                            label="New Delivery Address"
                                        />
                                    </Box>
                                </Box>
                            }

                            {
                                state.forADate === "yes" &&

                                <Box mt={5} width="50%" >
                                    <Box mb={2} display="flex" justifyContent="space-between" alignItems="center" gap={3}>
                                        <Typography variant="h6">
                                            Enter SO's address:
                                        </Typography>
                                        <TextField
                                            value={signifAddress}
                                            onChange={e => setSignifAddress(e.target.value)}
                                            variant="outlined"
                                            required color="secondary"
                                            label="SO's Delivery Address"
                                        />
                                    </Box>
                                </Box>}
                        </Box>


                        <Box mt={5} width="100%" display="flex" justifyContent="space-between" alignItems="center">
                            <Button component={Link} to="/order/schedule" color="secondary" variant="contained" size='large'>
                                <NavigateBeforeIcon fontSize="large" />
                                <Typography variant="h6">Set Schedule/Delivery</Typography>
                            </Button>
                            <Button onClick={handleNext} color="secondary" variant="contained" size='large'>
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