import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { OrderContext, ACTIONS } from '../context/OrderContext';

import {
    Paper, Box, Typography, Chip, Grid, Divider, Button,
    TextField, Radio, RadioGroup, FormControlLabel,
} from "@mui/material";

import moment from 'moment';
import DateAdapter from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { makeStyles } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import theme from '../Theme';
import { OrderDetails, OrderBreadcrumbs } from "../components";
import { foodMenu } from '../constants';
import swal from "sweetalert";
const useStyles = makeStyles(() => ({
    mainDivider: {
        backgroundColor: theme.palette.secondary.main,
        border: "none", height: 2, margin: "10px 0",
    }
}));

function SetSchedule() {
    const navigate = useNavigate();
    const classes = useStyles();
    const [today, setToday] = React.useState(new moment());
    const [sched, setSched] = React.useState(new moment());
    const [forDate, setForDate] = React.useState(null);
    const [signifName, setSignifName] = React.useState("");
    const [signifEmailAdd, setSignifEmailAdd] = React.useState("");

    const {state, dispatch} = useContext(OrderContext);
    // console.log(state);
    const handleNext = () => {
        if(forDate === "no"){
            dispatch({type: ACTIONS.changeForADate, payload: "no"});
            dispatch({type: ACTIONS.changeSOName, payload: "Not available"});
            dispatch({type: ACTIONS.changeSOAddress, payload: "Not available"});
            dispatch({type: ACTIONS.changeSchedule, payload: sched.format('LLL')});
            navigate("/order/shipping");
        }
        else if(forDate === "yes") {
            dispatch({type: ACTIONS.changeForADate, payload: "yes"});
            dispatch({type: ACTIONS.changeSchedule, payload: sched.format('LLL')});
            dispatch({type: ACTIONS.changeSOAddress, payload: ""});
            dispatch({type: ACTIONS.changeSOName, payload: signifName});
            console.log(sched.format('LLL'));
            navigate("/order/shipping");
        } else {
            swal("Please specify if order is for a date or not", "", "warning");
        }
    };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{ mb: 5 }}>
                    <OrderBreadcrumbs current="setSchedule" />
                    <Paper elevation={12} sx={{ minHeight: "60vh", mx: 5, borderRadius: 5, p: 5 }}>
                        <Typography sx={{ mb: 2, color: "black.main" }} variant="h4" align="center" fontWeight={700}>
                            Set Schedule/Delivery
                        </Typography>

                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ border: "2px solid", borderColor: "secondary.main", height: "clamp(300px,60vh,800px)", }}>
                            <Box width="100%" justifyContent="center" display="flex" alignItems="center" gap={5} >
                                <Typography variant="h6">
                                    Are you taking this order for a date?
                                </Typography>
                                <RadioGroup row value={forDate}
                                    onChange={(e) => setForDate(e.target.value)}>
                                    <FormControlLabel value="yes" control={<Radio color="secondary" size="large" required />} label={
                                        <Typography variant="h6">Yes</Typography>
                                    } />
                                    <FormControlLabel value="no" control={<Radio color="secondary" size="large" required />} label={
                                        <Typography variant="h6">No</Typography>
                                    } />
                                </RadioGroup>
                            </Box>
                            {
                                forDate === "yes" &&
                                <Box mt={5} width="85%" >
                                    <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="h6">Set the appointment schedule for your virtual dinner date:</Typography>
                                        <LocalizationProvider dateAdapter={DateAdapter}>
                                            <DateTimePicker ampm disablePast
                                                required={forDate === "yes"}
                                                disabled={forDate === "no" || !forDate}
                                                minDate={today}
                                                minTime={moment().hour(13)}
                                                maxTime={moment().hour(20)}
                                                renderInput={(props) => <TextField {...props} color="secondary" />}
                                                label="Pick Date and Time"
                                                value={sched}
                                                onChange={(newValue) => setSched(newValue)}
                                            />
                                        </LocalizationProvider>
                                    </Box>

                                    <Typography mb={2} variant="h6">
                                        Input Significant Other's name and email address:
                                    </Typography>
                                    <Box display="flex" justifyContent="center" alignItems="center" gap={5}>
                                        <TextField value={signifName} onChange={(e) => setSignifName(e.target.value)} required={forDate === "yes"}
                                            disabled={forDate === "no" || !forDate} label="SO's name" color="secondary" />

                                        <TextField type="email" value={signifEmailAdd} onChangeCapture={(e) => setSignifEmailAdd(e.target.value)} required={forDate === "yes"}
                                            disabled={forDate === "no" || !forDate} label="SO's Email Address" color="secondary" />
                                    </Box>
                                </Box>
                            }

                            {
                                forDate === "no" &&
                                <Box mt={5} width="70%" >
                                    <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="h6" sx={{pb: 3}}>Set the delivery schedule for your order:</Typography>
                                        <LocalizationProvider dateAdapter={DateAdapter}>
                                            <DateTimePicker ampm disablePast required
                                                minDate={today}
                                                minTime={moment().hour(13)}
                                                maxTime={moment().hour(20)}
                                                renderInput={(props) => <TextField {...props} color="secondary" helperText="Operation hours: 1:00 PM - 10:00 PM" />}
                                                label="Pick Date and Time"
                                                value={sched}
                                                onChange={(newValue) => setSched(newValue)}
                                                
                                            />
                                        </LocalizationProvider>
                                    </Box>
                                </Box>
                            }


                        </Box>

                        <Box mt={5} width="100%" display="flex" justifyContent="space-between" alignItems="center">
                            <Button component={Link} to="/order/menu" color="secondary" variant="contained" size='large'>
                                <NavigateBeforeIcon fontSize="large" />
                                <Typography variant="h6">Order Food</Typography>
                            </Button>
                            <Button onClick={handleNext} color="secondary" variant="contained" size='large'>
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