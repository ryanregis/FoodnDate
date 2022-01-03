import React from 'react';
import { Box, Typography, Paper, TextField, Button, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../Theme';

const useStyles = makeStyles(() => ({
    container: {
        width: "50%",
        height: "100vh",
        color: theme.palette.white.main,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "50%",
    },
    loginForm: {
        width: "50%",
        height: "45%",
        padding: 25,
        backgroundColor: theme.palette.white.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    loginCreds: {
        width: "100%",
        height: "45%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
    },
    formInputRoot: {
        color: theme.palette.neutral.main
    },
    formInputFocused: {
        color: theme.palette.secondary.main,
    },
    formInputNotchedOutline: {
        borderWidth: "3px !important"
    },
    divider: {
        background: theme.palette.neutral.main,
        width: "100%"
    },
    register: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    }
}));

export default function Login() {
    const classes = useStyles();
    return (
        <div className="login">
            <Box className={classes.container}>
                <Box className={classes.title}>
                    <Typography variant="login_title">
                        <span style={{ color: "#FF5656" }}>Food</span><span>n</span><span style={{ color: "#6A7EFC" }}>Date</span>
                    </Typography>
                    <Typography variant="h6" fontWeight={500} sx={{ mt: 3 }}>
                        Food and Dating at your fingertips,<br/>anywhere in Metro Manila.
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.container}>
                <Paper className={classes.loginForm} sx={{ borderRadius: 10, }}>
                    <form className={classes.loginCreds}>
                        <TextField required autoFocus fullWidth name="email" type="email" color="secondary" variant="outlined"
                            label="Email Address"
                            InputLabelProps={{
                                classes: {
                                    root: classes.formInputRoot,
                                    focused: classes.formInputFocused,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.formInputRoot,
                                    focused: classes.formInputFocused,
                                    notchedOutline: classes.formInputNotchedOutline
                                }
                            }} />
                        <TextField required fullWidth name="password" type="password" color="secondary" variant="outlined"
                            label="Password"
                            InputLabelProps={{
                                classes: {
                                    root: classes.formInputRoot,
                                    focused: classes.formInputFocused,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.formInputRoot,
                                    focused: classes.formInputFocused,
                                    notchedOutline: classes.formInputNotchedOutline
                                }
                            }} />

                        <Button fullWidth type="submit" color="secondary" variant="contained">
                            <Typography fontSize="1.125rem" fontWeight={500}>Log In</Typography>
                        </Button>
                    </form>
                    <Divider classes={{root: classes.divider}} />
                    <Box className={classes.register}>
                        <Typography sx={{color: "primary.main"}} variant="subtitle1">Don't have an account yet?</Typography>
                        <Button variant="contained">
                        <Typography fontSize="1.125rem" fontWeight={500}>Register New Account</Typography>
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}
