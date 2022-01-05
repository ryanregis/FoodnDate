import React from 'react';
import { Grid, ThemeProvider, Typography, Box, TextField, Button, Card, CardActionArea, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../Theme';
import DateAdapter from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import "../App.css";

const useStyles = makeStyles (() => ({
    setAppoint: {
        borderRadius: '20px',
        border: '2px solid #6A7EFC',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '2%',
        fontSize: 'clamp(1.3rem, 1vw, 2rem)',
    },
    fieldInput: {
        height: 'clamp(3rem, 2vh, 3rem)'
    },
    calendarDesign: {
        borderRadius: '20px',
        border: '2px solid #6A7EFC',
    }, 
    memoDesign: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    }
}))
const Appointment = () => {
    const [value, setValue] = React.useState(new moment());
    const classes = useStyles();
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid container sx={{bgcolor: 'white.main'}}>
                    <Grid item alignItems='stretch' sm={3} xs={12} p={4} sx={{bgcolor: 'secondary.main', color:'white.main'}}>
                        <Box variant='contained'>
                        <Typography variant='h3'>Appointments</Typography>
                        <Typography variant='body1'>You have no appointment yet</Typography>
                        </Box>
                    </Grid>
                    <Grid p={5} container sm={9} xs={12}>
                        <Grid item sm={12} xs={12}>
                            <Box className={classes.setAppoint}>
                                Hey @user has someone invited you for a virtual date?
                                <Box >
                                    <form>
                                        <TextField className={classes.fieldInput} variant='outlined' label='Enter invite code'  />
                                        <Button className={classes.fieldInput} variant='contained' sx={{bgcolor:'secondary.main'}}>Set Appointment</Button>
                                    </form>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid p={5} item sm={6} xs={12}>
                            <Card sx={{ maxWidth: '100%'}} className={classes.calendarDesign}>
                                <CardActionArea>
                                    <CardContent className='intro'>
                                    <Typography gutterBottom variant="body1" component="div">
                                        Current Date and Time: {<br/>} 
                                        12/20/2021 12:30 A.M. {<br/>} 
                                        No Upcoming Virtual Date Appointment Yet.
                                    </Typography>
                                    </CardContent>
                                    <CardContent align='center'>
                                        <LocalizationProvider dateAdapter={DateAdapter}>
                                            <StaticDatePicker
                                                displayStaticWrapperAs="desktop"
                                                openTo="year"
                                                value={value}
                                                onChange={(newValue) => {
                                                setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid p={5} item sm={6} xs={12}>
                            <Card sx={{ maxWidth: '100%'}} className={classes.calendarDesign}>
                                <CardActionArea>
                                    <CardContent className='our-story'>
                                    <Typography gutterBottom variant="h3" component="div" sx={{color:'white.main'}}>
                                        Memo
                                    </Typography>
                                    </CardContent>
                                    <CardContent className={classes.memoDesign}>
                                        <form>
                                            <TextField className={classes.fieldInput} variant='outlined' label='Input Details'  />
                                            <Button className={classes.fieldInput} variant='contained' sx={{bgcolor:'secondary.main'}}>Save</Button>
                                        </form>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Appointment
