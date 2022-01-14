import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, TextField, Button, Card, CardActionArea, CardContent, Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
import DateAdapter from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import "../App.css";
import swal from 'sweetalert';

const useStyles = makeStyles(() => ({
    setAppoint: {
        borderRadius: '20px',
        border: '2px solid #6A7EFC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
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
        flexDirection: 'column',
        justifyContent: 'center',
    },

}))
let storeInfo = localStorage.getItem('memos') ? JSON.parse(localStorage.getItem('memos')) : [];
const Appointment = () => {
    const [value, setValue] = React.useState(new moment());
    const [clock, setClock] = React.useState(`${moment().format('MMMM Do YYYY, h:mm a')}`);
    const classes = useStyles();
    React.useEffect(() => {
        setInterval(() => {
            setClock(`${moment().format('MMMM Do YYYY, h:mm a')}`);
        }, 0);
    }, []);
    const [memo, setMemo] = useState('');
    const [id, setID] = useState(Date.now);
    const [infoEntry, setInfoEntry] = useState(storeInfo);

    const handleMemo = (e) => {
        setMemo(e.target.value);
    };

    const handleDeleteEach = (e) => {
        swal({
            title: "Do you really want to delete this entry?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                const numId = parseInt(e.target.value);
                const eachDelete = [...infoEntry].filter((item) => {
                    return item.id !== numId;
                })
                setInfoEntry(eachDelete);
            }
            else {
                return false;
            }
        })

    };

    const handleProductSubmit = (e) => {
        e.preventDefault();
        setID(Date.now);

        if (memo !== '') {
            const entryInput = { id, memo };
            alert("You Have Save Your Memo")
            setInfoEntry([...infoEntry, entryInput]);
        }
        else {
            alert('Please Put an Entry');
        }

        setMemo('');
    }

    useEffect(() => {
        localStorage.setItem('memos', JSON.stringify(infoEntry));
    }, [infoEntry]);

    return (
        <div>
            <Grid container sx={{ bgcolor: 'white.main' }}>
                <Grid item alignItems='stretch' sm={3} xs={12} p={4} sx={{ bgcolor: 'primary.light', color: 'white.main' }}>
                    <Box variant='contained'>
                        <Typography variant='h3'>Appointments</Typography>
                        <Typography variant='body1'>You have no appointments yet.</Typography>
                    </Box>
                </Grid>
                <Grid item sm={9} xs={12}>
                    <Grid container p={5} >
                        <Grid item sm={12} xs={12}>
                            <Box className={classes.setAppoint}>
                                Hey { } has someone invited you for a virtual date?
                                <form>
                                    <Box display="flex" alignItems="center" >
                                        <TextField className={classes.fieldInput} variant='outlined' label='Enter invite code' />
                                        <Button className={classes.fieldInput} variant='contained' sx={{ bgcolor: 'primary.main' }}>Set Appointment</Button>
                                    </Box>
                                </form>
                            </Box>
                        </Grid>

                        <Grid p={5} item sm={6} xs={12}>
                            <Card className={classes.calendarDesign}>
                                <CardActionArea>
                                    <CardContent className='intro'>
                                        <Typography gutterBottom variant="body1" component="div">
                                            Current Date and Time: {<br />}
                                            {clock} {<br />}
                                            No Upcoming Virtual Date Appointment Yet.
                                        </Typography>
                                    </CardContent>
                                    <CardContent align='center'>
                                        <LocalizationProvider dateAdapter={DateAdapter}>
                                            <StaticDatePicker
                                                displayStaticWrapperAs="desktop"
                                                openTo="day"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField  {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid p={5} item sm={6} xs={12}>
                            <Card className={classes.calendarDesign}>
                                <CardActionArea>
                                    <CardContent className='our-story'>
                                        <Typography gutterBottom variant="h3" component="div" sx={{ color: 'white.main' }}>
                                            Memo
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={classes.memoDesign}>
                                        <Box sx={{ display: 'grid', gridTemplateRows: { sm: '1fr 1fr', xs: '1fr 1fr' }, justifyContent: 'center' }}>
                                            <form onSubmit={handleProductSubmit}>
                                                <TextField id="inputMemo" name="inputMemo" value={memo} onChange={handleMemo} className={classes.fieldInput} variant='outlined' label='Input Details' />
                                                <Button type='submit' className={classes.fieldInput} variant='contained' sx={{ bgcolor: 'primary.main', marginLeft: '5px' }}>Save</Button>
                                            </form>
                                        </Box>
                                        {memo && <TableContainer>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Memo</TableCell>
                                                        <TableCell>Action</TableCell>
                                                    </TableRow>
                                                </TableHead>

                                                <TableBody >
                                                    {infoEntry.map((content) => (
                                                        <TableRow key={content.id}>
                                                            <TableCell >{content.memo}</TableCell>
                                                            <TableCell ><Button value={content.id} onClick={handleDeleteEach}>Delete</Button></TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Appointment
