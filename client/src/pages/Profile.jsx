import React, {useContext} from 'react';
import { Paper, Box, TextField, Typography, Divider, FormLabel, FormControl} from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../Theme';
import { UserContext } from "../context/UserContext";

const useStyles = makeStyles(() => ({
    root: {
        height: "100%",
        color: theme.palette.black.main,
        padding: 30
    },
    divider: {
        backgroundColor: theme.palette.white.main,
        color: theme.palette.black.main,
        border: "none", height: 2, margin: "10px 0",
    }
}));
const Profile = () => {
    const { userInfo} = useContext(UserContext);
    const styles = useStyles();
    return (
        <div>
            <Box className={styles.root}>
                <Paper elevation={6} sx={{p:2}}>
                    <Typography variant='h4' align='center'>User Profile</Typography>
                    <Divider/>
                    <form>
                        <Box sx={{display:'grid', gridTemplateColumns:{ sm: '1fr 1fr 1fr ', xs: '1fr ' }, gap:3, mt:2, p:3}}>
                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0] ? userInfo[0].first_name : "@user" }></TextField>
                            </FormControl>
                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0] ? userInfo[0].last_name : "@user" }></TextField>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Contact Number</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0] ? userInfo[0].contact_number : "@user" }></TextField>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0] ? userInfo[0].address : "@user" }></TextField>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Has Allergy?</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0].has_allergy ===1 ? "Yes" : "No" } ></TextField>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Allergen</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0] ? userInfo[0].allergens : "@user" }></TextField>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0] ? userInfo[0].email : "@user" }></TextField>
                            </FormControl>
                        </Box>
                        <Divider/>
                        <Box  sx={{display:'grid', gridTemplateColumns:{ sm: '1fr 1fr 1fr 1fr', xs: '1fr ' }, gap:3, p:3}}>
                            <FormControl>
                                <FormLabel>Relationship Status</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0] ? userInfo[0].relationship_status : "@user" }></TextField>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0].gender_id ===1 ? "Male" : "Female" }></TextField>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Sexual Orientation</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0].sexual_orientation_id ===1 ? "Heterosexual" : "Others" }></TextField>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Promotions Notifications</FormLabel>
                                <TextField disabled variant='outlined'  sx={{backgroundColor: 'white.main'}} value={userInfo[0].checked_promotions ===1 ? "Yes" : "No" }></TextField>
                            </FormControl>
                        </Box>
                    </form>
                    <Divider/>
                </Paper>
            </Box>
        </div>
    )
}

export default Profile
